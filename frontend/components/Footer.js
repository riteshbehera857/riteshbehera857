import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full bg-secondary opacity-30 mt-10 h-[10rem] flex justify-center items-center">
            <Link href="/">
                <a className="text-2xl text-white px-5 border-r-2 text-center">Home</a>
            </Link>
            <Link href="/about">
                <a className="text-2xl text-white px-5 border-r-2 text-center">About Us</a>
            </Link>
            <Link href="/contact">
                <a className="text-2xl text-white px-5 border-r-2 text-center">Contact Us</a>
            </Link>
        </div>
    )
}

export default Footer
