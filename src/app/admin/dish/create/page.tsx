'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormFieldCreateDish } from '@/components/FormField/CreateDish';
import { FormData, DishSchema, ValidFieldNames } from '@/schemas/Dish';
import { ChevronLeft, Plus, Upload, X } from 'lucide-react';
import { ChangeEvent } from 'react';
import Link from 'next/link';

export default function CreateDish() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(DishSchema),
    });

    const onSubmit = async (data: FormData) => {
        const response = await axios.post('/create/dish', data);

        const { errors = {} } = response.data;

        const fieldErrorMapping: Record<string, ValidFieldNames> = {
            name: 'name',
            category: 'category',
            ingredients: 'ingredients',
            price: 'price',
            description: 'description',
        };

        const fieldWithError = Object.keys(fieldErrorMapping).find(
            (field) => errors[field],
        );

        if (fieldWithError) {
            setError(fieldErrorMapping[fieldWithError], {
                type: 'server',
                message: errors[fieldWithError],
            });
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] || null;

        if (file) {
            console.log('Arquivo selecionado:', file);
        }
    };

    return (
        <div className="bg-dark-400 text-light-400">
            <div className="min-h-screen lg:w-[40rem] flex flex-col container mx-auto p-4 pt-12 pb-24 justify-center">
                <Link href="/" className='flex -ml-2 pb-6'>
                    <ChevronLeft />
                    voltar
                </Link>
                <h1 className='text-3xl text-center font-bold pb-4'>Novo prato</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-4">
                        <label
                            htmlFor="create-dish-image"
                            className="flex flex-col cursor-pointer gap-2"
                        >
                            <span>Imagem do prato</span>
                            <input
                                id="create-dish-image"
                                type="file"
                                accept=".png, .jpg, .jpeg, .gif"
                                onChange={(e) => handleFileChange(e)}
                                className="hidden"
                            />
                            <div className="rounded-md border flex items-center border-dashed border-gray-300 p-4 text-center gap-4 bg-dark-900">
                                <Upload />
                                Clique para selecionar uma imagem
                            </div>
                        </label>
                    </div>

                    <FormFieldCreateDish
                        id="create-dish-name"
                        type="text"
                        name="name"
                        placeholder="Ex.: Salada Ceasar"
                        register={register}
                        error={errors.name}
                    />

                    <div className='flex flex-col gap-2'>
                        <p>Categoria</p>
                        <select name="category" id="create-dish-category" className="rounded-md flex items-start p-4 gap-4 bg-dark-900">
                            <option value="meat">Refeição</option>
                            <option value="dessert">Sobremesa</option>
                            <option value="drink">Bebida</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p>Ingredientes</p>
                        <div className='pl-4 py-2 flex flex-wrap items-center gap-4 bg-dark-900 rounded-lg'>
                            <p className='flex text-white bg-light-600 px-4 py-2 rounded-md gap-4'>Pão naan <X width={16} /> </p>
                            <button className='rounded-md border border-dashed flex items-start px-4 py-2 gap-4'>Adicionar <Plus width={16}></Plus></button>
                        </div>
                    </div>

                    <FormFieldCreateDish
                        id="create-dish-price"
                        type="number"
                        name="price"
                        placeholder="R$ 00,00"
                        register={register}
                        error={errors.name}
                    />

                    <div className='flex flex-col gap-2'>
                        <p>Descrição</p>
                        <textarea name="description" id="create-dish-description" className='min-h-[10rem] bg-dark-900 p-4' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
}
