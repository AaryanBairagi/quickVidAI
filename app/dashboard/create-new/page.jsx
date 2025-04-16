"use client"
import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyleCom from './_components/SelectStyle';
import DurationCom from './_components/DurationCom';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CustomLoading from './_components/CustomLoading';

const CreateNew = () => {
  const [formdata , setFormData] = useState([]);
  const [videoScript , setVideoScript] = useState();
  const [loading , setLoading] = useState(false);
  const [audioFileUrl , setAudioFileUrl] = useState();
  const [captions , setCaptions] =useState();

  const onHandleInputChange=(fieldName , fieldValue)=>{
    console.log(fieldName, fieldValue);
    setFormData(prev=>({...prev , [fieldName]:fieldValue}));
  }

  //Triggering the Create Button
  const onCreateClickHandler=()=>{
    // GetVideoScript();
    GenerateAudioFile(Ascript);
  }

  //Get the video script via Gemini
  const GetVideoScript = async () => {
    setLoading(true);
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
    const result = await axios.post('/api/get-video-script', {
      prompt: prompt,
    }).then(response => {
      console.log("Generated Scenes:", response.data.result);
      setVideoScript(response.data.result);
      GenerateAudioFile(response.data.result);
      // You can now store scenes in state if you want
    }).catch(err => {
      console.error("Error:", err);
    });
    setLoading(false);
  };
  
  //Generate a MP3 audio file for the videoscript
  const GenerateAudioFile = async(videoScript)=>{
    setLoading(true);
    let script = '';
    const id = uuidv4();
    videoScript.forEach(item=>{
      script=script+item.ContentText+' ';
    });
    
    console.log(script);

    await axios.post('/api/generate-audio' , {
      text:videoScript,
      id:id
    }).then(response=>{
      console.log(response.data);
      setAudioFileUrl(response.data.result);
    });
    setLoading(false);
  }

  //Generate captions for the audio file
  const GenerateAudioCaption = async(fileUrl)=>{
    setLoading(true);
    await axios.post('/api/generate-caption' , {
      audioFileUrl:fileUrl
    } ).then(response=>{
      console.log(response.data.result);
      setCaptions(response?.data?.result);
    });
    setLoading(false);
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
              <DurationCom onUserSelect={onHandleInputChange}/>

              {/* Create Button */}
              <Button className='mt-10' onClick={onCreateClickHandler} >Create Short Video</Button>
            </div>
        <CustomLoading loading={loading} />
    </div>
  )
}

export default CreateNew