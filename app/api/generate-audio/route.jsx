import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { getDownloadURL } from "firebase/storage";
import { NextResponse } from "next/server";
const fs = require('fs');
const util = require('util');

const client = new TextToSpeechClient({
    apiKey:process.env.GOOGLE_API_KEY
});

export async function POST(req){

    //Getting the text that is to be converted to Speech
    const {text,id} = await req.json();

    //Creating Files with the special id 'id' ans storing them in the firebase reference 
    const storageRef = ref(storage, 'QuickVid/'+id+'.mp3');
    
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
        };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer=Buffer.from(response.audioContent,"binary");

    //This will store the file to FireBase
    await uploadBytes(storageRef , audioBuffer , {contentType:'audio/mp3'});

    const downloadUrl = await getDownloadURL(storageRef);

    console.log(downloadUrl);

    return NextResponse.json({'Result':downloadUrl});
}