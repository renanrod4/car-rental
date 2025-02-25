import React from 'react'
import Image from 'next/image';
import './header.css';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    variable: "--font-family",
    subsets:['latin'],
    weight:['100','200','300','400','500','600','700','800','900',]
});

export function Header() {

    return (
        <div className="header">
            <div className='logo'>
                <Image src="/svgs/Frame.svg" width="24" height="25" alt='logo' />
                <span>RENTCARS</span>
            </div>
            <div className='central'>
                <ul className='links'>
                    <li><a href="#" className={poppins.variable}>Become a renter</a></li>
                    <li><a href="#">Rental deals</a></li>
                    <li><a href="#">How it work</a></li>
                    <li><a href="#">Why choose us</a></li>
                </ul>
            </div>
            <div className='sign'>
                <p>Sign in</p>
                <button>Sign up</button>
            </div>
        </div>
    )
}
