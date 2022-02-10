import React from 'react'
import Hero from '../Components/Hero'
import Guest from '../Layouts/Guest'

export default function Home() {
    return (
        <Guest judul='Home' user='tiwi'>
            <Hero/>
            <div className='bg-yellow-500'><h1>welcome...</h1></div>
        </Guest>
    )
}
