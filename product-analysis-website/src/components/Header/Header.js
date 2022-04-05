import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
<nav className="flex sm:justify-center space-x-4 ">
  {[
    ['Home', '/'],
    ['Review', '/review'],
    ['Dashboard', '/dashboard'],
    ['Blogs', '/blogs'],
    ['About', '/about']
  ].map(([title, url]) => (
    <Link to={url} className="rounded-lg px-3 py-2 text-rose-600 m-5 font-medium hover:bg-slate-100 hover:text-slate-900 font-bold">{title}</Link>
  ))}
</nav>
<section className="flex sm:justify-center content-center items-center space-x-4 align-item">
     <div className='w-1/2'>
            <h1 className='text-6xl font-bold m-5 text-rose-600'>This is Header</h1>
            <p className='text-xl font-bold text-wrapper text-rose-900'>This Website will give you an Overview of Product Analysis and Review of the customers</p>
     </div>
    <div className='w-1/2'>
        <img src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?t=st=1649117818~exp=1649118418~hmac=04a9db4cb0135fbe89858977ce39b9488c5ae0bb38b6f3a405ac74800c606e26&w=1380" alt="" />
    </div>


</section>
   

        </div>
    );
};

export default Header;