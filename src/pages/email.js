import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { EmailPrompt } from '../components/EmailPrompt'

export default function Email() {
    return (
        <>
            <Header />
            <SideBar />
            <main className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center -mt-20 max-w-5xl m-auto">
                <h1>Obtener redacción de correo</h1>
                <EmailPrompt />
            </main>
        </>
    )
}
