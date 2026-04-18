import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image alt='logo-hero-kidz' src={"/assets/logo.png"} width={80} height={70}/>
            <h2 className='text-xl font-bold'>Hero Kidz</h2>
        </Link>
    );
};

export default Logo;