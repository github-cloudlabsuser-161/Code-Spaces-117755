import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

//take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital letter
// for javascript 
const reverseSentence = (sentence) => {
    const reversedSentence = sentence.split(' ').reverse().join(' ');
    return reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
}


const data = [
    [
        {name: 'John', age: 30},
        {name: 'Jane', age: 25},
    ],
    [  
        { name: 'Bob', age: 20},
    ]
];
// As an illustration, pull names out of the data array
const names = data.flatMap((group) => group.map((person) => person.name));

// Map through an array of arrays of objects
// Example: Extract names from the data array
// Desired Outcome: ['John', 'Jane', 'Bob']
const names = data.flatMap((group) => group.map((person) => person.name));