import React, { useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsRocketTakeoff } from "react-icons/bs";
import ceo from "../../assets/icons/ceo.png"
import { LuTarget } from "react-icons/lu";
import { TbDeviceVisionPro } from "react-icons/tb";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#f1eded]'>
       <section class="relative bg-[#ff5656] text-white">
        <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902" 
                 alt="Team working" 
                 class="w-full h-full object-cover opacity-20"/>
        </div>
        <div class="relative container mx-auto px-4 py-24">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p class="text-xl md:text-2xl max-w-2xl">
                Building the future of online shopping since 2015, one customer at a time.
            </p>
        </div>
    </section>

    <main class="container mx-auto px-4 py-12">

        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div class="bg-white p-8 rounded-lg shadow-sm">
                <div class="flex items-center mb-4">
                    <i class="fas fa-bullseye text-[#ff5656] text-3xl"><LuTarget/></i>
                    <h2 class="text-2xl font-bold ml-4">Our Mission</h2>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    To revolutionize the online shopping experience by providing high-quality products, 
                    exceptional customer service, and innovative solutions that make e-commerce accessible to everyone.
                </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-sm">
                <div class="flex items-center mb-4">
                    <i class="fas fa-eye text-[#ff5656] text-3xl"><TbDeviceVisionPro/></i>
                    <h2 class="text-2xl font-bold ml-4">Our Vision</h2>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    To become the world's most customer-centric e-commerce platform, where customers can find 
                    and discover anything they might want to buy online.
                </p>
            </div>
        </section>

    
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-heart text-[#ff5656] text-2xl"><FaHeart/></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Customer First</h3>
                    <p class="text-gray-600">
                        Every decision we make starts with our customers' needs and satisfaction.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-shield-alt text-[#ff5656] text-2xl"><MdOutlineSecurity/></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Trust & Security</h3>
                    <p class="text-gray-600">
                        We maintain the highest standards of security and trust in all our operations.
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rocket text-[#ff5656] text-2xl"><BsRocketTakeoff/></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Innovation</h3>
                    <p class="text-gray-600">
                        We constantly innovate to improve the shopping experience for our customers.
                    </p>
                </div>
            </div>
        </section>

   
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div class="max-w-3xl mx-auto">
                <div class="relative pl-8 pb-6 border-l-2 border-[#ff5656]">
                    <div class="absolute left-[-8px] top-0 w-4 h-4 bg-[#ff5656] rounded-full"></div>
                    <h3 class="text-xl font-semibold mb-2">2015 - The Beginning</h3>
                    <p class="text-gray-600">Started as a small online store with just 100 products.</p>
                </div>
                <div class="relative pl-8 pb-6 border-l-2 border-[#ff5656]">
                    <div class="absolute left-[-8px] top-0 w-4 h-4 bg-[#ff5656] rounded-full"></div>
                    <h3 class="text-xl font-semibold mb-2">2018 - Major Expansion</h3>
                    <p class="text-gray-600">Expanded to 10,000+ products and launched mobile app.</p>
                </div>
                <div class="relative pl-8 pb-6 border-l-2 border-[#ff5656]">
                    <div class="absolute left-[-8px] top-0 w-4 h-4 bg-[#ff5656] rounded-full"></div>
                    <h3 class="text-xl font-semibold mb-2">2021 - Going International</h3>
                    <p class="text-gray-600">Expanded operations to 10+ countries worldwide.</p>
                </div>
                <div class="relative pl-8">
                    <div class="absolute left-[-8px] top-0 w-4 h-4 bg-[#ff5656] rounded-full"></div>
                    <h3 class="text-xl font-semibold mb-2">2024 - Present Day</h3>
                    <p class="text-gray-600">Serving millions of customers with 100,000+ products.</p>
                </div>
            </div>
        </section>

     
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <img src={ceo} alt="CEO" class="w-32 h-32 rounded-full mx-auto mb-4"/>
                    <h3 class="text-xl font-semibold">Shruti Gupta</h3>
                    <p class="text-[#ff5656] mb-3">CEO & Founder</p>
                    <p class="text-gray-600">10+ years of experience in e-commerce and retail.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <img src="https://girlgeek.io/wp-content/uploads/2020/08/ezCater-CTO-Erin-DeCesare.jpg" alt="CTO" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                    <h3 class="text-xl font-semibold">Jane Smith</h3>
                    <p class="text-[#ff5656] mb-3">Co-Founder</p>
                    <p class="text-gray-600">Leading our technical innovation and development.</p>
                </div>
                
            </div>
        </section>

   
        <section class="bg-[#ff5656] text-white rounded-lg p-8 mb-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 class="text-4xl font-bold mb-2">1M+</h3>
                    <p>Happy Customers</p>
                </div>
                <div>
                    <h3 class="text-4xl font-bold mb-2">100K+</h3>
                    <p>Products</p>
                </div>
                <div>
                    <h3 class="text-4xl font-bold mb-2">10+</h3>
                    <p>Countries</p>
                </div>
                <div>
                    <h3 class="text-4xl font-bold mb-2">24/7</h3>
                    <p>Customer Support</p>
                </div>
            </div>
        </section>

     
        <section class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
            <p class="text-gray-600 mb-8">
                We'd love to hear from you. Reach out to us for any questions or partnerships.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <a href="mailto:contact@example.com" class="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50">
                    <i class="fas fa-envelope text-[#ff5656] mr-3"><MdEmail/></i>
                    blinkbasket@gmaie.com
                </a>
                <a href="tel:+919892768560" class="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50">
                    <i class="fas fa-phone text-[#ff5656] mr-3"><MdAddCall/></i>
                    +91 9892768560
                </a>
             
            </div>
        </section>
    </main>
    </div>
  )
}

export default AboutUs
