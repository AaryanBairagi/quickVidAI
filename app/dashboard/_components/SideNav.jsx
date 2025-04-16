"use client"
import { FileVideo, PanelsTopLeft, ShieldPlus, CircleUser } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const SideNav = () => {
    const MenuOption = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/dashboard',
        icon: PanelsTopLeft,
    },
    {
        id: 2,
        name: 'Create New',
        path: '/dashboard/create-new',
        icon: FileVideo,
    },
    {
        id: 3,
        name: 'Upgrade',
        path: '/upgrade',
        icon: ShieldPlus,
    },
    {
        id: 4,
        name: 'Account',
        path: '/account',
        icon: CircleUser,
    },
    ];
    //Display the User's current route 
    const path = usePathname();
    console.log(path);
return (
    <div className='w-64 h-screen shadow-md p-5'>
        <div className='grid gap-3'>
        {MenuOption.map((item) => (
            <Link href={item.path} key={item.id}>
                <div className={`flex items-center gap-3 p-3 hover:bg-[#06b6d4] hover:text-white cursor-pointer rounded-sm text-shadow-2xs
                ${path === item.path ? 'bg-cyan-500 text-white' : ''}` }>
                <item.icon />
                <h2>{item.name}</h2>
                </div>
            </Link>
            
        ))}
        </div>
    </div>
    );
};

export default SideNav;
