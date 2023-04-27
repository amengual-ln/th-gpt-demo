import Link from 'next/link'

export const SideBar = () => {
    return (
        <aside className='flex flex-col justify-center h-screen fixed -mt-20'>
            <ul>
                <li className="m-4">
                    <Link className="p-4" href="/">Job description</Link>
                </li>
                <li className="m-4">
                    <Link className="p-4" href="/skills">Skills</Link>
                </li>
                <li className="m-4">
                    <Link className="p-4" href="/email">Email</Link>
                </li>
            </ul>
        </aside>
    )
}