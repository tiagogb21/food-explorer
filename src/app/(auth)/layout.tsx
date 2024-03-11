import Image from "next/image";
import { ReactNode } from "react";


interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children } : AuthLayoutProps) {
    return (<div className="flex flex-col lg:flex-row bg-dark-400">
        <div className="w-full p-10 lg:w-1/2 flex items-center justify-center">
            <Image
                src="/logo.png"
                alt="logo"
                width={300}
                height={300}
            />
        </div>
        {children}
    </div>);
}