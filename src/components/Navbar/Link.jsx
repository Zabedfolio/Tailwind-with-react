import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='lg:mr-10 px-4 py-2 hover:bg-black'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;