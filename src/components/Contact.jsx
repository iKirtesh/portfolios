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
        <div className="container mx-auto py-8 px-4 lg:px-8">
            <h1 className="text-2xl font-bold mb-8 text-center">Contact Me</h1>
            <p className="text-lg mb-8 text-center">Feel free to send me a message. I'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        rows="6"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;
