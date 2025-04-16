import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const EmptyState = () => {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dotted gap-3'>
        <h2>You don't have any short video created</h2>
        <Link href={'/dashboard/create-new'}>
        <Button className="bg-[#06b6d4] text-white hover:bg-[#0891b2] hover:text-white cursor-pointer">Create New Short Video</Button>
        </Link>
    </div>
  )
}

export default EmptyState