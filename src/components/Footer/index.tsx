import Image from "next/image"
import moment from 'moment'

export const Footer = () => {
    return (
        <footer className="bg-dark-600 text-light-100 lg:px-32">
            <div className="container mx-auto flex items-center justify-between p-4 gap-8">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="grayscale"
                />
                <p>© {moment().year()}. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}