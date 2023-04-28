import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Prompt } from '../components/Prompt'

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center -mt-20 max-w-5xl m-auto">
        <h1>Obtener redacción para job description</h1>
        <Prompt />
      </main>
    </>
  )
}
