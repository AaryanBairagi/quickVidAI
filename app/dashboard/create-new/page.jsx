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
        <h2 className='font-bold text-3xl text-cyan-500 drop-shadow-md'>Create New</h2>
            <div className='shadow-md p-10'>

              {/* Select Topic  */}
              <SelectTopic onUserSelect={onHandleInputChange}/>

              {/* Select Style */}
              <SelectStyleCom onUserSelect={onHandleInputChange}/>

              {/* Duration */}
              {/* <DurationCom/> */}

              {/* Create Button */}
              
            </div>
        
    </div>
  )
}

export default CreateNew