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

   

        </div>
    );
};

export default Header;