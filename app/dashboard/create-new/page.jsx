"use client"
import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyleCom from './_components/SelectStyle';
import DurationCom from './_components/DurationCom';

const CreateNew = () => {
  const [formdata , setFormData] = useState([]);
  const onHandleInputChange=(fieldName , fieldValue)=>{
    console.log(fieldName, fieldValue);
  }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-2xl text-cyan-500'>
            <div className='mt-10 shadow-md p-10'>

              {/* Select Topic  */}
              <SelectTopic onUserSelect={onHandleInputChange}/>

              {/* Select Style */}
              <SelectStyleCom/>

              {/* Duration */}
              {/* <DurationCom/> */}

              {/* Create Button */}
              
            </div>
        </h2>
    </div>
  )
}

export default CreateNew