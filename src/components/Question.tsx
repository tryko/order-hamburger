import React from 'react';

import { IQuestion } from './../Interfaces';
import { Link } from 'react-router-dom';

export default function Question({ question, options, nextPath }: IQuestion) {
    return (
        <div>
            <div>{question}</div>
            <ul>
                {options.map((op, i) => (
                    <li key={i + op}> {op}</li>
                ))}
            </ul>
            <Link to={nextPath}>Next</Link>
        </div>
    );
}
