"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
    const menus = [
        { id: "our-services", label: "Our Services" },
        { id: "location", label: "Location" },
        { id: "bridal", label: "Bridal" },
        { id: "pricing", label: "Pricing" },
        { id: "about-us", label: "About Us" },
        { id: "blog", label: "Blog" }
    ];

    const [menuStatus, setMenuStatus] = useState(false);

    const menuBtn = () => {
        setMenuStatus(!menuStatus);
    };

    const openLocationInGoogleMaps = () => {
        const googleMapsURL = `https://maps.app.goo.gl/S796T8u7HGekEuWW8`;
        window.open(googleMapsURL, '_blank');
    };

    // Effect to disable/enable scrolling
    useEffect(() => {
        if (menuStatus) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function to reset scroll when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuStatus]);

    return (
        <>
            <header className='px-14 py-8 flex items-center lg:justify-between justify-center text-white absolute z-[99] w-[100%]'>
                <div>
                    <Image 
                        src="/vanikasLogo.svg" 
                        alt="Vanikas Logo" 
                        className='md:w-[250px] w-[200px]' 
                        width={250} 
                        height={100} 
                    />
                </div>
                <FaBars 
                    className='lg:hidden block absolute left-[40px] text-[30px]' 
                    onClick={menuBtn}
                />
                <div>
                    <ul className='lg:flex hidden gap-5'>
                        {menus.map((item) => (
                            <li 
                                key={item.id} 
                                className='text-[16px] cursor-pointer hover:drop-shadow-white-glow hover:font-semibold text-center transition-all min-w-[100px]'
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            <div className={menuStatus ? 'lg:hidden block bg-white text-black h-[100vh] w-[75%] z-[999999999] fixed -translate-x-[0%] transition-all duration-1000' : "lg:hidden block bg-white text-black h-[100vh] w-[75%] z-[999999999] fixed -translate-x-[100%] transition-all duration-500"}>
                <RxCross1 
                    className='absolute right-[50px] top-[50px] text-primary font-medium' 
                    onClick={menuBtn}
                />
                <ul className='text-center py-[50px] grid grid-cols place-items-center place-content-center h-full'>
                    {menus.map((item) => (
                        <li 
                            key={item.id} 
                            className='my-[20px] text-primary' 
                            onClick={item.id === "location" ? openLocationInGoogleMaps : null}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
