'use client';

import { ChevronLeft, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Params {
    type: string;
    id: string;
}

interface Props {
    params: Params;
}

const recipeDetails = {
    name: 'Salada Ravanello',
    description:
        'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
    ingredients: ['alface', 'cebola', 'pão naan'],
    totalPrice: 25,
};

export default function RecipeDetails({ params: { type, id } }: Props) {
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="min-h-screen lg:min-h-[78vh] 2xl:min-h-screen flex items-center 2xl:items-start 2xl:pt-10 justify-center bg-dark-400">
            <div className="container mx-auto pt-10">
                {recipeDetails && (
                    <div className="relative lg:h-[65vh] flex flex-col lg:flex-row items-center justify-center gap-8 p-8 text-light-300">
                        <Link
                            href="/"
                            className="absolute top-1 -mt-6 lg:top-4 left-10 lg:left-32 flex items-center gap-2 text-light-300"
                        >
                            <ChevronLeft />
                            <span className="font-bold text-lg">voltar</span>
                        </Link>
                        <Image
                            src="/macarrons.png"
                            alt="logo"
                            width={390}
                            height={390}
                        />
                        <div className="flex flex-col items-start gap-12 lg:w-[38rem]">
                            <div className='flex flex-col items-center lg:items-start'>
                                <h1 className="text-3xl mb-8">
                                    {recipeDetails.name}
                                </h1>
                                <p className="text-lg mb-4 text-center lg:text-start">
                                    {recipeDetails.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {recipeDetails.ingredients.map(
                                        (ingredient, index) => (
                                            <p
                                                key={ingredient}
                                                className="text-lg rounded-md px-2 py-1 bg-dark-1000"
                                            >
                                                {ingredient}
                                            </p>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-center lg:justify-start gap-4">
                                <div className="flex gap-2">
                                    <button onClick={handleDecrease}>
                                        <Minus />
                                    </button>
                                    {quantity}
                                    <button onClick={handleIncrease}>
                                        <Plus />
                                    </button>
                                </div>
                                <button className="bg-tomato-100 px-4 py-3 rounded-md">
                                    Incluir - {recipeDetails.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
