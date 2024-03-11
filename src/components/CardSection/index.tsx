import { ICard } from "@/types/interfaces/ICard"
import { Card } from "./Card"
import { Poppins } from "next/font/google"

interface Card {
    name: string
    cards: ICard[]
}

interface Props {
    title: string
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const cards: ICard[] = [
    {
        id: 1,
        name: 'Refeição',
        type: 'meals',
        description: 'Refeição',
        image: '',
        price: 123,
    },
    {
        id: 2,
        name: 'Refeição',
        type: 'meals',
        description: 'Refeição',
        image: '',
        price: 123,
    },
    {
        id: 3,
        name: 'Refeição',
        type: 'meals',
        description: 'Refeição',
        image: '',
        price: 123,
    },
    {
        id: 4,
        name: 'Refeição',
        type: 'meals',
        description: 'Refeição',
        image: '',
        price: 123,
    },
]

export const CardSection = ({title} : Props) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className={`text-2xl font-bold text-light-300 ${poppins.className}`}>{title}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-7">
                {
                    cards.map((card) => (
                        <Card key={card.id} {...card} />
                    ))
                }
            </div>
        </div>
    )
}