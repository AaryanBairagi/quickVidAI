import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
const Header = () => {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-sm'>
        {/* Div for Left Side */}
        <div className='flex gap-3 items-center'>
            <Image src="/logo.png" alt="Logo" width={30} height={30}  className='object-cover drop-shadow-sm'/>
            <h2 className='mt-1 font-bold text-xl drop-shadow-sm'>QuickVid AI</h2>
        </div>
        {/* Div for the Right Side  */}
        <div className='flex gap-4 items-center'>
            <Button className="bg-[#06b6d4] text-white hover:bg-[#0891b2] hover:text-white cursor-pointer">
                Dashboard
            </Button>
            {/* Div for User profile */}
            <div>
            <UserButton size={10} />
            </div>
        </div>
    </div>
  )
}

export default Header