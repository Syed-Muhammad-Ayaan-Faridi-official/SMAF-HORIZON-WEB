import React from 'react'
import { RiArrowDownSLine } from '@remixicon/react'
import { useState } from 'react';

const faqData = [
    {
        question: "How do online classes work?",
        answer:
            "All classes are conducted live through Zoom, allowing students to interact with teachers, ask questions in real time, and participate just like a physical classroom.",
        open : false
    },
    {
        question: "Are classes recorded?",
        answer:
            "Yes. Every live session is recorded so students can revise the lecture whenever needed.",
        open : false
    },
    {
        question: "Do I get PDF notes?",
        answer:
            "Yes. Students receive well-structured PDF notes, worksheets, and additional study materials after the lectures.",
        open : false
    },
    {
        question: "What if I miss a class?",
        answer:
            "Every session is recorded and shared with enrolled students, so you can catch up anytime.",
        open : false
    },
    {
        question: "Can I ask questions anytime?",
        answer:
            "Yes. Students receive dedicated WhatsApp support to ask academic questions outside class.",
        open : false
    },
    {
        question: "Which subjects are offered?",
        answer:
            "We offer O Level and A Level subjects, including Computer Science, Mathematics, Physics, Chemistry, Biology, Accounting, Business, Economics, and more.",
        open : false
    },
    {
        question: "How big are the batches?",
        answer:
            "We keep our batches small to ensure every student receives personal attention.",
        open : false
    },
    {
        question: "Are there regular tests?",
        answer:
            "Yes. We conduct topic-wise tests, assessments, and past paper practice regularly.",
        open : false
    },
    {
        question: "How is progress tracked?",
        answer:
            "We monitor attendance, test performance, weak topics, and overall academic progress.",
        open : false
    },
    {
        question: "Do parents get reports?",
        answer:
            "Yes. Parents receive regular progress reports highlighting performance and improvement areas.",
        open : false
    },
    {
        question: "Is past paper practice included?",
        answer:
            "Yes. We conduct dedicated past paper sessions with detailed explanations and examiner-style marking.",
        open : false
    },
    {
        question: "How do I enroll?",
        answer:
            "Contact us through WhatsApp or submit the inquiry form on our website, and our team will guide you.",
        open : false
    },
    {
        question: "Are trial classes available?",
        answer:
            "Yes. Selected courses include a trial class before enrollment.",
        open : false
    },
    {
        question: "Why choose SMAF Horizon?",
        answer:
            "We provide experienced teachers, live interactive classes, recordings, PDF notes, regular testing, personalized progress tracking, parent reports, and WhatsApp support.",
        open : false
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(false)
    return (
        <div id='faqs' className='w-full h-full bg-linear-to-t from-[#000000] to-[#152331] flex flex-col items-center max-md:px-5 md:px-9 gap-15 max-sm:pt-10 pt-20 pb-10'>
            <div className='w-full flex flex-col max-sm:items-center gap-2'>
                <h1 className='w-fit text-lg lg:text-xl 2xl:text-3xl font-bold text-[#FBCE40] relative px-8 py-2 sm:py-3 rounded-full bg-linear-to-br from-[#000000]/70 via-[#011a33]/10 to-[#152331] border border-white/10 shadow-[#6c5300] shadow-md 2xl:px-12 2xl:py-5'>FAQs</h1>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:w-[75%]  max-sm:text-center text-white font-bold'>Frequently Asked <span className='text-yellow-200'>Questions</span></h1>
                <h3 className='text-lg text-gray-500 max-sm:text-center'>Make smarter decisions and scale grades effortlessly with performance analysis.</h3>
            </div>
            <div className='w-full h-full px-5 max-sm:px-2 flex flex-col gap-6'>
                {faqData.map((faq,index) => (
                    <div
                    key={index} 
                    className={`w-full ${openIndex === index ? 'h-full' : 'h-fit'} max-sm:p-2 sm:px-4 sm:py-3 2xl:max-w-140 rounded-2xl border border-white/15 bg-linear-to-br from-[#09203F]/10 to-[#537895]/20 backdrop-blur-3xl shadow-lg shadow-gray-950 hover:border-amber-300/50 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-104 hover:shadow-amber-400/30`}>
                        <div className='flex flex-row justify-between items-center'>
                            <h1 className='text-xl max-sm:text-lg text-white'>{faq.question}</h1>
                            <div className="w-fit p-3 max-sm:p-1.5 rounded-full bg-linear-to-br from-[#1A3A5A] to-[#07111F] border border-white/10 cursor-pointer" onClick={() => {
                                setOpenIndex(openIndex === index ? null : index)
                            }}>
                                <RiArrowDownSLine size={22} className={`text-[#FBCE40] transition-all duration-200 ease-in-out ${openIndex === index? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                        <div id='noscroll' className={` transition-all duration-300 overflow-auto ${openIndex === index ? 'max-h-45 opacity-100 mt-3' : 'max-h-0 opacity-0'} text-lg text-gray-400 `}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQs