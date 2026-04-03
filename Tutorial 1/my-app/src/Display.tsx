import React from "react";
import './Display.css';

interface DisplayProps {
    input: string;
}
const Display = ({ input }: DisplayProps) => {
    return (
        <div className="display">
            {input}
        </div>
    );
};
export default Display;