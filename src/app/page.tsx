'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';

import { CardSection } from '@/components/CardSection';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-dark-400 text-light-400">
            <div className="w-full container mx-auto lg:px-32 pt-36 pb-20">
                <div className='flex h-[12rem] bg-gradient-to-b from-dark-800 to-dark-900 mb-24'>
                    <div className="w-1/2 -mt-36 -ml-12">
                        <Image
                            src="/macarrons.png"
                            alt="logo"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center gap-2">
                        <h1 className={`text-4xl font-bold text-light-400 ${poppins.className}`}>
                            Sabores inigualáveis
                        </h1>
                        <p className='text-md'>
                            Sinta o cuidado do preparo com ingredientes
                            selecionados
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                    <CardSection title="Refeições" />
                    <CardSection title="Sobremesas" />
                    <CardSection title="Bebidas" />
                </div>
            </div>
        </main>
    );
}
