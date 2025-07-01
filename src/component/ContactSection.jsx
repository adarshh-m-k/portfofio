import { Instagram, Linkedin, Mail, Map, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { cn } from '../lib/utils'
import emailjs from '@emailjs/browser'

function ContactSection() {


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_dx0hb2g', // Your EmailJS Service ID
            'template_lesi1oq', // Replace with your Template ID from EmailJS
            e.target,
            'tk9KGdcCtJttjcv3R' // Replace with your public key from EmailJS
        )
            .then(() => {
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('Email send error:', error);
                alert('Failed to send message.');
            });

        e.target.reset();
    };

    return (
        <section
            id='contact'
            className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>


                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch </span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or mind to collaborate?Feel free to reach out.
                    I'm always open to discussing new oppertunities.

                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            {""}
                            Contact Information

                        </h3>
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />{" "}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                        href="mailto:mkadarsh150@gmail.com">
                                        mkadarsh150@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'> Phone</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                        href="tel:9037310206">
                                        9037310206
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        Thamarassery, Kozhikode, Kerala
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://www.linkedin.com/in/adarsh-mk-bbb8aa30b'
                                    target='_blank'
                                >
                                    <Linkedin />
                                </a>
                                <a href='https://www.instagram.com/a.darsh._00?igsh=eDg3YXc0b2k1ejVt'
                                    target='_blank'
                                >
                                    <Instagram />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form 
                        onSubmit={handleSubmit}
                        className='space-y-6'>
                            <div>
                                <label className='block text-sm font-medium mb-2'
                                    htmlFor='name'>{" "}Your Name
                                </label>
                                <input
                                    type="text"
                                    id='from_name'
                                    name='from_name'
                                    required
                                    className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring:-2 focus:ring-primary'
                                    placeholder='Adarsh M K'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium mb-2'
                                    htmlFor='name'>{" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id='from_email'
                                    name='from_email'
                                    required
                                    className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring:-2 focus:ring-primary'
                                    placeholder='john@gmail.com'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium mb-2'
                                    htmlFor='name'>{" "}
                                    Your Message
                                </label>
                                <textarea

                                    id='from_message'
                                    name='from_message'
                                    required
                                    className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring:-2 focus:ring-primary resize-none'
                                    placeholder="Hello, I'd like to talk about... "
                                />
                            </div>
                            <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Send Message
                                <Send size={16} />

                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection


// service_9hhbm0y