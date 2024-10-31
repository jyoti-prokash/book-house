import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-green-500 space-y-10 text-center p-52'>
            <h1 className='text-6xl font-bold'>OOPs!</h1>
            <h2 className='font-bold text-3xl'>404 Not Found</h2>
            <h2 className='text-xl font-bold'>Something went wrong</h2>
            <Link to="/"><button className='btn text-2xl font-bold mt-10 hover:bg-blue-600'>Go Back</button></Link>
        </div>
    );
};

export default Error;