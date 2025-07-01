import { ArrowUp } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='py-12 px-4 bg-card relative border-border border-t mt-12 pt-8 flex flex-wrap justify-between items-center'>
            {" "}
            <p className='text-sm text-muted-foreground'>
                &copy; {new Date().getFullYear()} Adarsh.co. All rights reserved.
            </p>
            <a 
            className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'
            href="#hero">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}

export default Footer