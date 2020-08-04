import React from 'react';
interface IProps {
   chosen: string;
   title: string;
   options: string[]; // add label and value
   handleClick: (value: any) => void;
}

const Question: React.FC<IProps> = ({
   chosen,
   handleClick,
   options,
   title,
}) => {
   return (
      <div>
         <div>{title}</div>
         {options.map((op, i) => (
            <div>
               <input
                  name="radio"
                  key={i + op}
                  type="radio"
                  checked={chosen === op}
                  onClick={() => handleClick(op)}
               />{' '}
               {op}
            </div>
         ))}
      </div>
   );
};

export default Question;
