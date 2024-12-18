"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from '../components/ui/Text-Generate-Effect';
import { ParaGenEffect } from '../components/ui/ParaGen-Effect';
import { CardHoverEffect } from '../components/ui/Card-Hover-Effect';
import { modal } from '@nextui-org/react';


    

export default function Services() {
  let [modalStatus, setModalStatus] = useState(false)
  let showModal=()=>{
    setModalStatus(true)
}
let closeModal=()=>{
    setModalStatus(false)
}

  let tagline="Our Services"
  const services = [
    {
      title: "Hair Care",
      description: "Professional hair cutting, styling, coloring, highlights, hair spa treatments, and more.",
      image: "/assets/hair-services.png"
    },
    {
      title: "Facial & Skincare", 
      description: "Rejuvenating facials, clean-ups, anti-aging treatments, and specialized skin treatments.",
      image: "/assets/facial-service.jpg"
    },
    {
      title: "Makeup",
      description: "Professional makeup services for all occasions - bridal, party, or everyday glamour.",
      image: "/assets/makeup-service.jpg"
    },
    {
      title: "Nail Care",
      description: "Manicures, pedicures, nail art, and gel polish services for beautiful hands and feet.",
      image: "/assets/nails-service.jpg"
    },
    {
      title: "Body Treatments",
      description: "Relaxing massages, body wraps, scrubs, and specialized therapeutic treatments.",
      image: "/assets/body-service.jpg"
    },
    {
      title: "Threading & Waxing",
      description: "Professional hair removal services using premium products for smooth, glowing skin.",
      image: "/assets/waxing-service.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000] to-[#8a0000] flex items-center justify-center">
          <div className="text-center text-white px-4">
          <TextGenerateEffect words={tagline} className={"text-4xl md:text-6xl font-bold font-Forum mb-4"} />
          <ParaGenEffect words={"Discover Beauty & Wellness Solutions"} className={"text-lg md:text-xl italic"} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#6d0000]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 bg-[#6d0000] text-white px-6 py-2 rounded-full hover:bg-[#8a0000] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CardHoverEffect items={services} />

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6d0000]">Ready to Transform Your Look?</h2>
          <p className="text-gray-600 mb-8">Experience the best in beauty care with our expert professionals</p>
          <button onClick={showModal} className="bg-[#6d0000] outline-none text-white px-8 py-3 rounded-full text-lg hover:bg-[#8a0000] transition-colors">
            Schedule an Appointment
          </button>
        </div>
      </section>
      <AppointModal modalStatus={modalStatus} show={showModal} close={closeModal}/>
    </main>
  );
}


let AppointModal=({modalStatus, showModal, close})=> {
  console.log(modalStatus)

return (
  <>
      {/* <!-- Main modal --> */}
      <div tabIndex="-1" aria-hidden="true" onClick={close} className={modalStatus?"outline-none transition-all backdrop-blur-sm  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full px-[] md:inset-0 max-h-full":"hidden transition-all"}>
          <div className="animate-bounce2 relative p-4 w-full max-w-md max-h-full mx-auto my-[50px]">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Send us an Enquiry
                      </h3>
                      <button type="button" onClick={close} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center outline-none dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <form className="p-4 md:p-5">
                      <div className="grid gap-4 mb-4 grid-cols-2">
                          <div className="col-span-2">
                              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                              <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                              <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                              <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                              <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                  <option selected="">Select category</option>
                                  <option value="TV">TV/Monitors</option>
                                  <option value="PC">PC</option>
                                  <option value="GA">Gaming/Console</option>
                                  <option value="PH">Phones</option>
                              </select>
                          </div>
                          <div className="col-span-2">        
                              <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                              <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 resize-none outline-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                          </div>
                      </div>
                      <button type="submit" className="text-white inline-flex items-center bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Submit
                      </button>
                  </form>
              </div>
          </div>
      </div>
  </>
)
}