import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-6'>
            <section className="flex sm:justify-center content-center items-center space-x-4 align-item">
     <div className='w-1/2'>
            <h1 className='text-6xl font-bold m-5 text-rose-600'>Sales Analysis</h1>
            <p className='text-xl font-bold text-wrapper text-rose-900'>This Website will give you an Overview of Product Analysis and Review of the customers</p>
     </div>
    <div className='w-1/2'>
        <img src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?t=st=1649117818~exp=1649118418~hmac=04a9db4cb0135fbe89858977ce39b9488c5ae0bb38b6f3a405ac74800c606e26&w=1380" alt="" />
    </div>


</section>
<button className="bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/review'>Review</Link></button>
        </div>
    );
};

export default Home;