import React, { useEffect } from 'react'

const TermsandConditions = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div class="bg-white shadow-sm">
        <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-6">
            <h1 class="text-3xl font-bold text-gray-800">Terms and Conditions</h1>
            <p class="text-gray-600 mt-2">Last updated: January 2024</p>
        </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      
        <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 class="text-xl font-semibold mb-4">Quick Navigation</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#acceptance" class="text-[#ff5656] hover:text-[#d04141] flex items-center">
                    <i class="fas fa-check-circle mr-2"></i>
                    Acceptance of Terms
                </a>
                <a href="#account" class="text-[#ff5656] hover:text-[#d04141] flex items-center">
                    <i class="fas fa-user-circle mr-2"></i>
                    Account Registration
                </a>
                <a href="#products" class="text-[#ff5656] hover:text-[#d04141] flex items-center">
                    <i class="fas fa-shopping-cart mr-2"></i>
                    Products & Services
                </a>
                <a href="#pricing" class="text-[#ff5656] hover:text-[#d04141] flex items-center">
                    <i class="fas fa-tag mr-2"></i>
                    Pricing & Payment
                </a>
                <a href="#shipping" class="text-[#ff5656] hover:text-[#d04141] flex items-center">
                    <i class="fas fa-truck mr-2"></i>
                    Shipping & Delivery
                </a>
                <a href="#privacy" class="text-[#ff5656] hover:text-[#d04141] flex items-center">
                    <i class="fas fa-shield-alt mr-2"></i>
                    Privacy & Security
                </a>
            </div>
        </div>

  
        <div class="space-y-8 max-w-4xl mx-auto">
          
            <section id="acceptance" class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <div class="prose text-gray-700">
                    <p class="mb-4">
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>
                    <p>
                        Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                </div>
            </section>

      
            <section id="account" class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold mb-4">2. Account Registration</h2>
                <div class="prose text-gray-700">
                    <p class="mb-4">
                        To access certain features of the website, you may be required to register for an account. You agree to:
                    </p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Provide accurate, current, and complete information</li>
                        <li>Maintain and update your information</li>
                        <li>Keep your account password secure</li>
                        <li>Be responsible for all activities under your account</li>
                    </ul>
                </div>
            </section>

            <section id="products" class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold mb-4">3. Products & Services</h2>
                <div class="prose text-gray-700">
                    <p class="mb-4">
                        All products and services are subject to availability. We reserve the right to:
                    </p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Modify or discontinue any product without notice</li>
                        <li>Limit the quantity of any product purchased per order</li>
                        <li>Refuse service to anyone for any reason</li>
                        <li>Change product specifications without notice</li>
                    </ul>
                </div>
            </section>

            <section id="pricing" class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold mb-4">4. Pricing & Payment</h2>
                <div class="prose text-gray-700">
                    <p class="mb-4">
                        All prices are subject to change without notice. We reserve the right to:
                    </p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Modify prices for products or services at any time</li>
                        <li>Refuse or cancel orders in cases of pricing errors</li>
                        <li>Charge additional fees for taxes, shipping, or handling</li>
                        <li>Change payment methods accepted at any time</li>
                    </ul>
                </div>
            </section>

            <section id="shipping" class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold mb-4">5. Shipping & Delivery</h2>
                <div class="prose text-gray-700">
                    <p class="mb-4">
                        Delivery times are estimates only. We are not responsible for:
                    </p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Delays caused by shipping carriers</li>
                        <li>Incorrect delivery addresses provided by customers</li>
                        <li>Import duties or customs clearance delays</li>
                        <li>Loss or damage during transit</li>
                    </ul>
                </div>
            </section>

            <section id="privacy" class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold mb-4">6. Privacy & Security</h2>
                <div class="prose text-gray-700">
                    <p class="mb-4">
                        Your privacy is important to us. We handle your data according to our Privacy Policy, which includes:
                    </p>
                    <ul class="list-disc pl-6 mb-4 space-y-2">
                        <li>Collection and use of personal information</li>
                        <li>Protection of customer data</li>
                        <li>Cookie usage and tracking technologies</li>
                        <li>Third-party service providers</li>
                    </ul>
                </div>
            </section>
        </div>

       
        <div class="bg-gray-100 p-6 rounded-lg mt-8 max-w-4xl mx-auto">
            <h2 class="text-xl font-semibold mb-4">Questions About Our Terms?</h2>
            <p class="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div class="flex flex-col md:flex-row gap-4">
                <a href="mailto:legal@example.com" class="flex items-center text-[#ff5656] hover:text-[#d04141]">
                    <i class="fas fa-envelope mr-2"></i>
                    blinkbasket@gmail.com
                </a>
                <a href="tel:+919892768560" class="flex items-center text-[#ff5656] hover:text-[#d04141]">
                    <i class="fas fa-phone mr-2"></i>
                    +91 9892868560
                </a>
            </div>
        </div>
    </main>
    

    </div>
  )
}

export default TermsandConditions
