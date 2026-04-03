import { useState } from 'react'
import Button from './Button.tsx'
import './Calculator.css'
import Display from './Display.tsx';

const Calculator = () => {
    const [input, setInput] = useState('');
    
    const handleClick = (value: string) => {
        if (value === '=') {
            try{
                setInput(eval(input).toString())
            } catch{
                setInput('Error');
            }
    
        } else if (value === 'C') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className='calculator'>
            <Display input={input} />
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
                <Button key={value} value={value} onClick={ ()=> handleClick(value)} />
                ))}
            </div>
        </div>
    )
}

export default Calculator