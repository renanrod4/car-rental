import React from 'react'
import './rsection.css'
import Image from 'next/image';
export function Rsection() {
    

    return (
        <section className='rsection'>
            <Image src={'/imgs/car.png'} className='car' alt='car' width={9000} height={9000} />
        </section>
    )
}
