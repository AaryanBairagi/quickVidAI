"use client"
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const DurationCom = ({ onUserSelect }) => {

    const [selectedOption, setSelectedOption] = useState();

return (
    <div className='mt-7'>
        <h2 className='font-bold text-xl text-cyan-500 drop-shadow-md'>Duration</h2>
        <p className='text-zinc-800 drop-shadow-md'>Select the duration of your video</p>

    <Select onValueChange={(value) => {
            setSelectedOption(value);
            value !== 'Custom Prompt' && onUserSelect('duration', value);
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-md drop-shadow-md">
            <SelectValue placeholder="Select Duration" />
        </SelectTrigger>

        <SelectContent>
            <SelectItem value='30 seconds'>30 seconds</SelectItem>
            <SelectItem value='60 seconds'>60 seconds</SelectItem>
        </SelectContent>
    </Select>

    
    </div>
    );
}

export default DurationCom
