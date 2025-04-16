"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';
const Dashboard = () => {
  const [videoList , setVideoList] = useState([]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-cyan-500 drop-shadow-sm'>DashBoard</h2>
        <Link href={'/dashboard/create-new'}>
        <Button className="bg-[#06b6d4] text-white hover:bg-[#0891b2] hover:text-white cursor-pointer">+ Create New</Button>
        </Link>
      </div>

      {/* Empty State */}
      {/* Rendering the Empty State if and only if the there's nothing in the User's dashboard */}
      {videoList?.length==0&&
      <div>
          <EmptyState />
      </div> }
    </div>
  )
}

export default Dashboard