import React from 'react'
import Button from '../Button'

const Main = () => {
    return (
        <>
            <div className='container'>

                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'>Stock Predition</h1>
                    <p className='text-light lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button text="Login" className='btn btn-outline-info' />
                </div>
            </div>

        </>
    )
}

export default Main