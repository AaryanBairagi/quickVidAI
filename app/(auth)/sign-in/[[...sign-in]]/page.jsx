import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return(
    <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* DIV for image */}
    <div>
        <Image src='/signIn.jpg' alt='login' width={500} height={500} className='w-full object-contain'/>
    </div>
        {/* DIV for SignIn component */}
    <div className='flex justify-center items-center h-screen'>
        <SignIn />
    </div>
        {/* END */}
    </div>
  )
}