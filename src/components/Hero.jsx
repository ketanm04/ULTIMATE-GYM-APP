import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO UNLEASH</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>THE CO<span className='text-blue-400'>LOSSUS</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby accept the challenge to become <span className='text-blue-400 font-medium'>absurdly colossal</span> embracing the risks of becoming the <span className='text-blue-400 font-medium'>neighborhood's mass anomaly.</span>I acknowledge the chance of outgrowing doorways, flirting with body identity chaos, and achieving legendary proportions. Proceed if you dare—monumental size awaits!</p>
            <Button func={() => {
                window.location.href = '#generate' //takes us to generate window when we click accept and begin
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}