import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Menu } from 'lucide-react';


const navItems = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const links= navItems.map(route => <Link key={navItems.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-6 mt-5 mb-10'>
            <span className='flex' onClick={()=> setOpen(!open)}>
                {open ? <CircleX className='md:hidden'></CircleX>:<Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 bg-gray-800 rounded-md
                    ${open ? 'top-15':'-top-55'}
                    `}>
                    {links}
                </ul>
                

                <h3 className='ml-4'>My NavBar</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            <button>Sign In</button>


        </nav>
    );
};

export default Navbar;