import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function AboutSection() {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text=4xl font-bold mb-12 text-center'>
                    About<span className='text-primary'>Me

                    </span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
                        <p className='text-muted-foreground'>
                            I’m a passionate full-stack developer who loves building real-world
                            web applications. I started coding out of curiosity, and it quickly
                            turned into a deep interest in software development. The MERN stack became
                            my go-to because of its flexibility and full JavaScript workflow. I enjoy turning
                            ideas into functional, interactive solutions.
                        </p>
                        <p className='text-muted-foreground'>
                            What I love about the MERN stack is how it lets me handle everything —
                            from dynamic UIs with React to building APIs with Node.js and Express.
                            MongoDB makes handling data smooth and scalable. I'm driven by solving
                            problems and constantly learning. Writing clean, efficient code is something
                            I truly enjoy.


                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <a href="#contact" className='cosmic-button'>
                                Get In Touch
                            </a>
                            <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                                Download CV
                            </a>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-forground'>Creating responsive websites and web application with
                                        modern frameworks.</p>

                                </div>

                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                                    <p className='text-muted-forground'> Designing intuitive user interface and 
                                        seamless user experiences
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Project Managemant</h4>
                                    <p className='text-muted-forground'>Leading projects from conception to completion with agile
                                        methogologies.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutSection