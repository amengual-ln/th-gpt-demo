import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { SkillsPrompt } from '../components/SkillsPrompt'

export default function Skills() {
    return (
        <>
            <Header />
            <SideBar />
            <main className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center -mt-20 max-w-5xl m-auto">
                <h1>Obtener skills de un rol específico</h1>
                <SkillsPrompt />
            </main>
        </>
    )
}
