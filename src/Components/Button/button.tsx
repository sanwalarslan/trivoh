import React from 'react'

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <button className='px-3 py-2 border-[black] border-[1px] hover:bg-black hover:text-white'>{name}</button>
  );
};

export default Button