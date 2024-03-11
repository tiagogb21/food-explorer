import { ICard } from '@/types/interfaces/ICard';
import { Heart, Minus, Plus } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const Card = ({ id, name, type, description, price }: ICard) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <Link
            href={`/recipes/${type}/${id}`}
            className={`relative h-[28rem] flex flex-col items-center justify-between gap-3 p-6 bg-dark-200 ${poppins.className}`}
        >
            <button className={`${isFavorite ? 'animation-pulse' : ''} absolute top-4 right-4 cursor-pointer`} onClick={handleFavorite}>
                <Heart className={`${isFavorite ? 'stroke-red-600 fill-red-600' : ''}`} />
            </button>
            <Image src="/macarrons.png" alt={name} width={180} height={180} />
            <h3 className="text-xl font-bold">{name}</h3>
            <p>{description}</p>
            <p className="text-2xl text-cake-100">
                {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </p>
            <div className="flex items-center justify-between gap-4">
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
                    Incluir
                </button>
            </div>
        </Link>
    );
};
