import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaCreditCard, FaMoneyBillWave, FaChevronRight } from 'react-icons/fa';
const HelpCenter = () => {

  const paymentFaqs = {
    razorpay: [
      {
        id: 1,
        question: "How to make a payment using Razorpay?",
        answer: "Select Razorpay as your payment method, enter your card/UPI/banking details, and follow the secure payment process."
      },
      {
        id: 2,
        question: "What payment methods does Razorpay support?",
        answer: "Razorpay supports Credit/Debit cards, UPI, Net Banking, and various digital wallets."
      },
      {
        id: 3,
        question: "What to do if payment fails?",
        answer: "Don't worry if payment fails. The amount will be refunded within 5-7 business days. You can retry the payment."
      }
    ],
    cod: [
      {
        id: 1,
        question: "How does Cash on Delivery work?",
        answer: "Pay in cash when your order is delivered to your doorstep."
      },
      {
        id: 2,
        question: "Is COD available in my area?",
        answer: "COD availability depends on your delivery location. Check during checkout."
      },
      {
        id: 3,
        question: "What are COD payment limitations?",
        answer: "COD has a maximum limit of ₹50,000 per order. Some items may not be eligible for COD."
      }
    ]
  };

  const FAQSection = ({ title, icon, faqs }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        {icon}
        <h2 className="text-xl font-semibold ml-3">{title}</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="group">
            <summary className="flex items-center cursor-pointer text-gray-700 hover:text-[#ff5656]">
              <FaChevronRight className="w-4 h-4 mr-2 transition-transform group-open:rotate-90" />
              {faq.question}
            </summary>
            <p className="mt-2 pl-6 text-gray-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );


  return (
    <div>
      <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-6">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Help Center</h1>
          <p class="text-gray-600">How can we help you today?</p>
        </div>
      </header>


      <section class="py-12 bg-[#f9fafb]">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold text-gray-800 mb-8">Quick Links</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#orders" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="text-blue-500 mb-4">
                <i class="fas fa-box text-3xl"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-2">Orders & Shipping</h3>
              <p class="text-gray-600">Track orders, shipping info, and delivery</p>
            </a>
            <a href="#returns" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="text-green-500 mb-4">
                <i class="fas fa-undo text-3xl"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-2">Returns & Refunds</h3>
              <p class="text-gray-600">Return policy and refund process</p>
            </a>
            <a href="#payments" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="text-purple-500 mb-4">
                <i class="fas fa-credit-card text-3xl"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-2">Payments</h3>
              <p class="text-gray-600">Payment methods and security</p>
            </a>
            <a href="#account" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="text-yellow-500 mb-4">
                <i class="fas fa-user-circle text-3xl"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-2">Account Help</h3>
              <p class="text-gray-600">Account management and security</p>
            </a>
          </div>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="container mx-auto px-4" id="orders">
          <h2 class="text-2xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div class="max-w-3xl mx-auto">

            <div class="mb-12">
              <h3 class="text-xl font-medium text-gray-800 mb-6">Orders & Shipping</h3>
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">How can I track my order?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive tracking information via email once your order ships.
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div class="border border-gray-200 rounded-lg">


                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">What are your shipping options?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      We offer standard shipping (3-5 business days), express shipping (1-2 business days), and international shipping options. Shipping costs vary based on your location and chosen method.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>


            <div id="returns" class="mb-12">
              <h3 class="text-xl font-medium text-gray-800 mb-6">Returns & Refunds</h3>
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg">


                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">What is your return policy?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      We accept returns within 30 days of delivery. Items must be unused, in original packaging, and with all tags attached. Some items may be excluded from returns.
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div class="border border-gray-200 rounded-lg">

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaAngleDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">How do I initiate a return?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      To initiate a return, log into your account, go to 'My Orders', select the item you wish to return, and follow the return process. You'll receive a return label via email.
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-[#f9fafb]" id='payments'>
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold text-gray-800 mb-8">Payments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ">
            <FAQSection
              title="Razorpay Payments"
              icon={<FaCreditCard className="text-[#ff5656] text-2xl" />}
              faqs={paymentFaqs.razorpay}
            />
            <FAQSection
              title="Cash on Delivery"
              icon={<FaMoneyBillWave className="text-green-600 text-2xl" />}
              faqs={paymentFaqs.cod}
            />
          </div>
        </div>
      </section>


     


      <section class="py-12 bg-[#f9fafb]">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold text-gray-800 mb-8">Need More Help?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-sm">

              <h3 class="text-lg font-medium text-gray-800 mb-2">Call Us</h3>
              <p class="text-gray-600 mb-4">Available 24/7</p>
              <a href="tel:+919892768560" class="text-[#ff5656] hover:text-[#e84d4d]">+91 9892768560</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="text-green-500 mb-4">
                <i class="fas fa-envelope text-3xl"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-2">Email Us</h3>
              <p class="text-gray-600 mb-4">Response within 24 hours</p>
              <a href="mailto:support@example.com" class="text-[#ff5656] hover:text-[#e84d4d]">blinkbasket@gmail.com</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="text-purple-500 mb-4">
                <i class="fas fa-comments text-3xl"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-2">Live Chat</h3>
              <p class="text-gray-600 mb-4">Available 24X7</p>
              <button class=" text-white px-4 py-2 rounded-lg btn-org transition-colors duration-300">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default HelpCenter




