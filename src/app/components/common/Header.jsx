import React from 'react'

export default function Header() {

    const menus = [
        {
          id: "Our Services",
          label: "Our Services",
        },
        {
          id: "Location",
          label: "Location",
        },
        {
          id: "Bridal",
          label: "Bridal",
        },
        {
            id: "Pricing",
            label: "Pricing",
        },
        {
          id: "About Us",
          label: "About Us",
        },
        {
            id: "Blog",
            label: "Blog",
        }
      ];

  return (
    <>
        <header className='px-14 py-8 flex items-center lg:justify-between justify-center text-white absolute z-[99] w-[100%]'>
            <div>
                <img src="/vanikasLogo.svg" className='md:w-[250px] w-[200px]' alt="Vanikas Logo" />
            </div>
            <div>
                <ul className='lg:flex hidden gap-5'>
                    {menus.map((item)=>{
                        return(
                            <li key={item.key} className='text-[16px] cursor-pointer hover:drop-shadow-white-glow hover:font-semibold text-center transition-all min-w-[100px]'>{item.label}</li>
                        )
                    })}
                </ul>
            </div>
        </header>
    </>
  )
}
