import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { FormContext } from '@/context/FormContext';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Food Explorer',
    description: 'An app to explore food recipes',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className}`}>
                <FormContext>
                    <Header />
                    {children}
                    <Footer />
                </FormContext>
            </body>
        </html>
    );
}
