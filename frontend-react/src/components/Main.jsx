import React from 'react'
import Button from '../Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
    return (
        <>
          

            <div className='container'>
                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'>Stock Prediction</h1>
                    <p className='text-light lead'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                    <Button text="Login" className='btn btn-outline-info' />
                </div>
            </div>

      
        </>
    )
}

export default Main
