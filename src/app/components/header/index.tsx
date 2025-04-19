import Link from 'next/link';

export function Header(){
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Cracko Craft</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href='/' className='hover:text-gray-400'>Home</Link></li>
                    <li><Link href='/sobre' className='hover:text-gray-400'>Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
}