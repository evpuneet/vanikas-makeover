import React from 'react';
import Image from 'next/image';

export default function Header() {
    const menus = [
        {
          id: "our-services", // Changed to lowercase for URL-friendly IDs
          label: "Our Services",
        },
        {
          id: "location",
          label: "Location",
        },
        {
          id: "bridal",
          label: "Bridal",
        },
        {
            id: "pricing",
            label: "Pricing",
        },
        {
          id: "about-us",
          label: "About Us",
        },
        {
            id: "blog",
            label: "Blog",
        }
    ];

    return (
        <header className='px-14 py-8 flex items-center lg:justify-between justify-center text-white absolute z-[99] w-[100%]'>
            <div>
                <Image 
                    src="/vanikasLogo.svg" 
                    alt="Vanikas Logo" 
                    className='md:w-[250px] w-[200px]' 
                    width={250} // Adjust width as needed
                    height={100} // Adjust height as needed to maintain aspect ratio
                />
            </div>
            <div>
                <ul className='lg:flex hidden gap-5'>
                    {menus.map((item) => {
                        return (
                            <li key={item.id} className='text-[16px] cursor-pointer hover:drop-shadow-white-glow hover:font-semibold text-center transition-all min-w-[100px]'>
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}
