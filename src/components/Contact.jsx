import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_hmpli4d',
            'template_wf0simc',
            formData,
            'vTy4d_BWyyjVT0itS'
        )
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                toast.success('Your message has been sent successfully!');
            }, (error) => {
                console.log(error.text);
                setError('Failed to send message. Please try again later.');
            });
    };

    return (
        <div className="container mx-auto py-5 px-2 lg:px-52 text-white m-10 bg-gradient-to-tr from-indigo-900 to-pink-500 rounded-2xl drop-shadow-lg">
            <div className="grid gap-2 md:grid-cols-2">
                <div className="card p-6  rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-md mb-4">Feel free to send me a message. I'll get back to you as soon as possible.</p>
                    <p className="text-md">You can also reach out to me on my social media channels for any inquiries or collaboration opportunities. I look forward to hearing from you!</p>
                </div>
                <div className="card p-6 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-md text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-2 py-1.5 text-gray-800  border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-md text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border text-gray-800  border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="message" className="block text-gray-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-lg"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-violet-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Contact;
