import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
            <h2 className='text-4xl font-bold'>আপনার শিশু কে দিন একটি সুন্দর ভবিষ্যৎ </h2>
            <p>Buy Every Toy with up to 15% Discount</p>
            <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>

        <div className="flex-1">
            <Image alt='Hero' src={"/assets/hero.png"} width={550} height={460}/>
        </div>

        </div>
    );
};

export default Banner;