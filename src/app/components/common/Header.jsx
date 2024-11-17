"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    
    const menus = [
        { id: "our-services", label: "Our Services", path: "/services" },
        { id: "location", label: "Location", path: null },
        { id: "bridal", label: "Bridal", path: "/bridal" },
        { id: "pricing", label: "Pricing", path: "/pricing" },
        { id: "about-us", label: "About Us", path: "/about" },
        { id: "blog", label: "Blog", path: "/blog" }
    ];

    const [menuStatus, setMenuStatus] = useState(false);

    const menuBtn = () => {
        setMenuStatus(!menuStatus);
    };

    const openLocationInGoogleMaps = () => {
        const googleMapsURL = `https://maps.app.goo.gl/S796T8u7HGekEuWW8`;
        window.open(googleMapsURL, '_blank');
    };

    useEffect(() => {
        if (menuStatus) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuStatus]);

    const handleMenuClick = (item) => {
        if (item.id === "location") {
            openLocationInGoogleMaps();
        }
        setMenuStatus(false);
    };

    const renderMenuItem = (item) => {
        const isActive = pathname === item.path;
        const className = `text-[16px] cursor-pointer hover:drop-shadow-white-glow hover:font-semibold text-center transition-all min-w-[100px] ${
            isActive ? 'font-semibold drop-shadow-white-glow' : ''
        }`;

        if (item.path) {
            return (
                <Link href={item.path} key={item.id}>
                    <li className={className}>
                        {item.label}
                    </li>
                </Link>
            );
        }

        return (
            <li 
                key={item.id}
                className={className}
                onClick={() => handleMenuClick(item)}
            >
                {item.label}
            </li>
        );
    };

    return (
        <>
            <header className='px-14 py-8 flex items-center lg:justify-between justify-center text-white absolute z-[99] w-[100%]'>
                <div>
                    <Link href="/">
                        <Image 
                            src="/vanikasLogo.svg" 
                            alt="Vanikas Logo" 
                            className='md:w-[250px] w-[200px]' 
                            width={250} 
                            height={100} 
                        />
                    </Link>
                </div>
                <FaBars 
                    className='lg:hidden block absolute left-[40px] text-[30px]' 
                    onClick={menuBtn}
                />
                <div>
                    <ul className='lg:flex hidden gap-5'>
                        {menus.map(renderMenuItem)}
                    </ul>
                </div>
            </header>

            <div className={`lg:hidden block bg-white text-black h-[100vh] w-full z-[999999999] fixed transition-all duration-500 ${
                menuStatus ? '-translate-x-[0%]' : '-translate-x-[100%]'
            }`}>
                <RxCross1 
                    className='absolute right-[50px] top-[50px] text-primary font-medium' 
                    onClick={menuBtn}
                />
                <ul className='text-center py-[50px] grid grid-cols place-items-center place-content-center h-full'>
                    {menus.map((item) => (
                        item.path ? (
                            <Link href={item.path} key={item.id}>
                                <li 
                                    className={`my-[20px] text-primary ${
                                        pathname === item.path ? 'font-semibold' : ''
                                    }`}
                                    onClick={() => setMenuStatus(false)}
                                >
                                    {item.label}
                                </li>
                            </Link>
                        ) : (
                            <li 
                                key={item.id} 
                                className='my-[20px] text-primary'
                                onClick={() => handleMenuClick(item)}
                            >
                                {item.label}
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </>
    );
}
