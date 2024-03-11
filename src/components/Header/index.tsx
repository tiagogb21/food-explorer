import Image from 'next/image';
import { BookmarkMinus, LogOut, Menu, Search } from 'lucide-react';
import Link from 'next/link';

const orders = 0;

export const Header = () => {
    return (
        <header className="bg-dark-600 text-light-100 lg:px-32">
            <nav className="relative container mx-auto flex items-center justify-between p-4 gap-8">
                <button className="flex lg:hidden">
                    <Menu />
                </button>
                <Link href={'/'} className='absolute lg:static lg:translate-x-0 lg:translate-y-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={200}
                        height={200}
                    />
                </Link>
                <div className="hidden flex-1 lg:flex gap-4">
                    <div className="flex flex-1 items-center py-3 rounded-md bg-dark-900 lg:pl-12 gap-4 text-light-400">
                        <Search className="w-4" />
                        <input
                            className="appearance-none focus:outline-none bg-inherit flex-1"
                            id="input-search"
                            type="text"
                            placeholder="Busque por pratos ou ingredientes"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-tomato-100 rounded-md py-3 px-8">
                        <BookmarkMinus />
                        Pedidos {orders}
                    </button>
                    <button>
                        <LogOut />
                    </button>
                </div>
            </nav>
        </header>
    );
};
