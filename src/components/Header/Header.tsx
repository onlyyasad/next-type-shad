import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { User2 } from 'lucide-react';

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-5xl bg-gray-200 my-4 p-4 mx-auto rounded-xl'>
            <Link href="/" className="font-bold text-lg tracking-widest">NEXT<span className='font-thin'>NINJA</span></Link>
            <div className='flex flex-row font-semibold text-gray-500 gap-4'>
                <Link href="/" className='hover:text-black duration-200'>HOME</Link>
                <Link href="/about-us" className='hover:text-black duration-200'>ABOUT US</Link>
                <Link href="/portfolio" className='hover:text-black duration-200'>PORTFOLIO</Link>
                <Link href="/blogs" className='hover:text-black duration-200'>BLOGS</Link>
            </div>
            <div className='flex flex-row gap-4'>
                <Link href="#">
                    <Button size={"icon"} variant={"outline"} className='shadow-md shadow-gray-400'>
                        <User2 />
                    </Button>
                </Link>
                <Link href="/registration">
                    <Button className='shadow-md shadow-gray-400'>
                        Registration
                    </Button>
                </Link>
                <Link href="/login">
                    <Button className='shadow-md shadow-gray-400'>
                        Login
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Header;