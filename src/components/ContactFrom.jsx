import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!formData.agree) {
            alert("You must agree to the privacy policy.");
            return;
        }

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            message: '',
            agree: false,
        });
    };

    return (
        <section className="bg-gradient-to-r from-blue-800 via-blue-400 to-cyan-500  dark:bg-slate-800 rounded-xl">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="md:w-2/3">
                        <h1 className="text-[60px] font-bold text-white mb-4">Do You Want to Start a Project?</h1>
                        <p className="mb-[44px] text-2xl text-white ">
                            Drop us a line for your project or share news about your company.
                            Yes, we check this mailbox frequently!
                        </p>
                        <div className='border-b border-white'></div>
                        <div className="flex gap-4 mt-5 w-[70%]">
                            {[
                                { title: '10+', subtitle: 'Years in business' },
                                { title: '100+', subtitle: 'In-house employees' },
                                { title: '250+', subtitle: 'Successful projects' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white rounded-lg p-4 text-start shadow-md">
                                    <p className="text-xl font-bold text-blue-700">{stat.title}</p>
                                    <p className="text-base text-emerald-600">{stat.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        <div className='flex items-center justify-start gap-20 md:mt-20 mt-10'>
                            <div><p className='text-white font-bold text-3xl'>Clutch</p></div>
                            <div><p className='text-white font-bold text-3xl'>Top Rated Plus</p>
                                <p className='font-bold text-3xl'><span className='text-green-500 '>Up</span>Work</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg md:w-1/3">
                        <h2 className="text-3xl font-bold text-blue-800 mb-6">Get 20% OFF Your First Project!</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm dark:bg-slate-800 dark:text-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm dark:bg-slate-800 dark:text-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm dark:bg-slate-800 dark:text-gray-100"
                                ></textarea>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="accent-blue-700"
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    I agree to the <a href="#" className="underline text-blue-700">privacy policy</a>.
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-md transition duration-200 w-full"
                            >
                                Send Message <FiSend className="text-xl" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
