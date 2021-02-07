import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React',
        content: 'React is a frontend JS framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among ENgineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
];

export default () => {
    return(
        <div>
            <Search />
        </div>
    );
};