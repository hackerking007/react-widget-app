import React, {useState} from 'react';
import App from '../App';
import Dropdown from './Dropdown';


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'Hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const[text, setText] = useState('');
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown label='Select a language' selected={language} onSelectedChange={setLanguage} options ={options} />
        </div>
    );
};

export default Translate;