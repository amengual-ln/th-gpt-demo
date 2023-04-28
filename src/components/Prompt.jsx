import { useConversationStore } from '../stores/conversations'
import { Ring } from '@uiball/loaders'

export const Prompt = () => {

    const generateCompletion = useConversationStore(state => state.generateCompletion)
    const isReplying = useConversationStore(state => state.isReplying)
    const response = useConversationStore(state => state.response)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = new FormData(event.target)
        const prompt = data.get('prompt')
        const company = data.get('company')

        generateCompletion({ prompt, type: 'jobDescription', company })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4 w-screen max-w-5xl">
                <label className='text-xl'>
                    Escribe el rol *
                </label>
                <textarea type="text" name="prompt" className="bg-white px-3 py-2 rounded-lg text-black" rows={1} />
                <label className='text-xl'>
                    Escribe la empresa (opcional)
                </label>
                <textarea type="text" name="company" className="bg-white px-3 py-2 rounded-lg text-black" rows={1} />
                <div className='flex justify-center'>
                    <button className="bg-[#02AEA2] text-white w-32 py-2 px-4 rounded-lg">Generar</button>
                </div>
            </form>
            {isReplying &&
                <span className='flex justify-center mt-32'>
                    <Ring size={35} color="#fafafa" />
                </span>
            }
            {!isReplying &&
                <p>{response}</p>
            }
        </section>
    )
}