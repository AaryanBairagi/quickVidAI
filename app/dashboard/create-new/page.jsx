"use client"
import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyleCom from './_components/SelectStyle';
import DurationCom from './_components/DurationCom';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const CreateNew = () => {
  const [formdata , setFormData] = useState([]);
  const onHandleInputChange=(fieldName , fieldValue)=>{
    console.log(fieldName, fieldValue);
    setFormData(prev=>({...prev , [fieldName]:fieldValue}));
  }

  
  const onCreateClickHandler=()=>{
    getVideoScript();
  }

  //Get the video script via Gemini
  const getVideoScript = async () => {
    console.log(formdata)
    const { topic, imageStyle, duration } = formdata;

    if (!topic || !imageStyle || !duration) {
      alert("Please fill out all fields before generating the video script.");
      return;
    }
  
    const prompt = `Write a video script for a short ${duration} video on the topic "${topic}". The video should follow a "${imageStyle}" style. Break the video down into multiple scenes. 
    For each scene, provide the following in JSON format:
  - imagePrompt: A visual prompt to generate a realistic AI image for the scene
  - contentText: The narration or content for that scene.
  
    Make the tone engaging and visually descriptive. Output only a JSON array of scenes.`;
    console.log(prompt); 
    // const result = await axios.post('/api/get-video-script', {
    //   prompt:prompt,
    // }).then(resp=>{
    //   console.log(resp.data); 
    // })
    const result = await axios.post('/api/get-video-script', {
      prompt: prompt,
    }).then(resp => {
      console.log("Generated Scenes:", resp.data.result);
      // You can now store scenes in state if you want
    }).catch(err => {
      console.error("Error:", err);
    });
    
  };
  

  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-3xl text-cyan-500 drop-shadow-md'>Create New</h2>
            <div className='shadow-md p-10'>

              {/* Select Topic  */}
              <SelectTopic onUserSelect={onHandleInputChange}/>

              {/* Select Style */}
              <SelectStyleCom onUserSelect={onHandleInputChange}/>

              {/* Duration */}
              <DurationCom onUserSelect={onHandleInputChange}/>

              {/* Create Button */}
              <Button className='mt-10' onClick={onCreateClickHandler} >Create Short Video</Button>
            </div>
        
    </div>
  )
}

export default CreateNew