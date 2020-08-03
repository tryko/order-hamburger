import React from 'react';

interface Iprops {
   children: React.ReactNode;
}

const FlexWRapper: React.FC<Iprops> = ({ children }) => {
   return (
      <div className="flex justify-center w-full h-full z-0">{children}</div>
   );
};

export default FlexWRapper;
