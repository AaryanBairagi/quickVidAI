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

const SelectTopic = ({ onUserSelect }) => {
    const options = ['Custom Prompt', 'Random AI', 'Horror', 'Historical', 'Motivational', 'Bed Time'];
    //PLAN_B
    // const options = [
    //     'Custom Prompt',
    //     'Technology',
    //     'Motivational',
    //     'Self Improvement',
    //     'Productivity Tips',
    //     'AI News',
    //     'Storytelling',
    //     'Horror Stories',
    //     'Historical Events',
    //     'Life Lessons',
    //     'Bedtime Stories',
    //     'Movie Recaps',
    //     'Book Summaries',
    //     'Business Ideas',
    //     'Science Facts'
    //   ];

    const [selectedOption, setSelectedOption] = useState();

return (
    <div>
        <h2 className='font-bold text-2xl text-cyan-500 drop-shadow-md'>Content</h2>
        <p className='text-zinc-800 drop-shadow-md'>Got a topic in mind for today’s video?</p>

    <Select onValueChange={(value) => {
            setSelectedOption(value);
            value !== 'Custom Prompt' && onUserSelect('topic', value);
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg drop-shadow-md">
            <SelectValue placeholder="Content-Type" />
        </SelectTrigger>

        <SelectContent>
            {options.map((item, index) => (
            <SelectItem key={index} value={item}>
                {item}
            </SelectItem>
            ))}
        </SelectContent>
    </Select>

    {selectedOption === 'Custom Prompt' && (
        <Textarea
            className='mt-3'
            onChange={(event) => {
            onUserSelect('topic', event.target.value);
            }}
            placeholder="Got an idea? Let's turn it into a video!"
        />
        )}
    </div>
    );
};

export default SelectTopic;
