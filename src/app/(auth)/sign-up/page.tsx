'use client'

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Poppins } from 'next/font/google';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormData, UserSchema, ValidFieldNames } from '@/schemas/User';
import { FormField } from '@/components/FormField';
import Link from 'next/link';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit = async (data: FormData) => {
        const response = await axios.post('/api/form', data);
        
        const { errors = {} } = response.data;

        const fieldErrorMapping: Record<string, ValidFieldNames> = {
            name: 'name',
            email: 'email',
            password: 'password',
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

    return (
        <main className='w-full lg:w-1/2 min-h-screen lg:py-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:w-[30rem] bg-dark-700 p-16 gap-8 text-light-100'>
                <h1 className={`font-bold text-3xl text-center ${poppins.className}`}>Crie sua conta</h1>

                <div className='flex flex-col gap-4'>
                <FormField
                    id="sign-up-name"
                    type="text"
                    placeholder="Exemplo: Maria da Silva"
                    name="name"
                    register={register}
                    error={errors.name}
                />

                <FormField
                    id="sign-up-email"
                    type="email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    name="email"
                    register={register}
                    error={errors.email}
                />
                
                <FormField
                    id="sign-up-password"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    name="password"
                    register={register}
                    error={errors.password}
                />
                </div>

                <button className='bg-tomato-100 px-8 py-3 rounded-md' type="submit">Criar uma conta</button>

                <Link href="sign-in" className='text-center'>Já tenho uma conta</Link>
            </form>
        </main>
    );
}
