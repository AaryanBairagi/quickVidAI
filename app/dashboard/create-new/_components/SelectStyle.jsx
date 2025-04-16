import Image from 'next/image';
import React, { useState } from 'react'

const SelectStyleCom = ({onUserSelect}) => {
  const styleOptions = [
    {
      name:'Realistic',
      image:'/realistic.jpg'
    },
    {
      name:'Cartoon',
      image:'/cartoon.jpg'
    },
    {
      name:'Comic',
      image:'/comic.jpg'
    },
    {
      name:'WaterColor',
      image:'/watercolor.jpg'
    },
    {
      name:'Space',
      image:'/space.jpg'
    },
    {
      name:'Technology',
      image:'/technology.jpg'
    }
  ];

  const [selectedOption , setSelectedOption] = useState();
  return (
    <div className='mt-7'>

        <h2 className='mt-3 font-bold text-xl text-cyan-500 drop-shadow-md'>Style</h2>
        <p className='text-zinc-800 drop-shadow-md'>Select your video style</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {styleOptions.map((item, index) => (
            <div key={index}
            className={`cursor-pointer transition-transform transform hover:scale-105 rounded-xl overflow-hidden border-2 border-transparent hover:border-cyan-500 shadow-md
            ${selectedOption==item.name&&'border-1 border-cyan-300'} `}>
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-40 object-cover rounded-lg"
              onClick={()=>{
                setSelectedOption(item.name)
                onUserSelect('imageStyle' , item.name)
              }}/>
            <p className="text-center font-medium py-2 text-sm bg-white text-zinc-700">{item.name}</p>
            </div>
            ))}
        </div>

    </div>
  )
}

export default SelectStyleCom