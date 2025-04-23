import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_7oqndng',   // Replace with your EmailJS service ID
                'template_amkx7a9',  // Replace with your EmailJS template ID
                form.current,
                'k1QocyzksinsiQYPK'       // Replace with your EmailJS public key
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                () => {
                    alert("Oops! Something went wrong.");
                }
            );
    };

    return (
        <section id="contact" className="w-full px-6 py-16 dark:from-[#0f0f0f] dark:to-[#1a1a1a]">
            <motion.div
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Left: Contact Info */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-white-800 dark:text-white">Let’s Connect</h2>
                    <p className="text-white-600 dark:text-gray-400 mb-6">
                        Got a project or just want to say hi? I'm open for freelance or collaborations!
                    </p>
                    <div className="space-y-3 text-white-700 dark:text-gray-300">
                        <p><strong>Email:</strong> kirannatarajan26@gmail.com</p>
                        <p><strong>Phone:</strong> +91 9787781799</p>
                        <p><strong>Location:</strong> Chennai, India</p>
                    </div>
                    <div className="flex justify-center gap-5 mt-6 text-2xl text-gray-600 dark:text-gray-300">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-black dark:hover:text-white transition-all duration-200 transform hover:scale-110" />

                        </a>
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500 transition-all duration-200 transform hover:scale-110" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-600 transition-all duration-200 transform hover:scale-110" />
                        </a>
                    </div>


                </div>

                {/* Right: Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-[#121212] shadow-xl rounded-2xl p-8 space-y-6">
                    <input name="user_name" type="text" placeholder="Your Name" required
                        className="w-full p-3 bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <input name="user_email" type="email" placeholder="Your Email" required
                        className="w-full p-3 bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <textarea name="message" rows="5" placeholder="Your Message" required
                        className="w-full p-3 bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
