import React from 'react';

const CustomButton = ({btnText}) => {


    return (
        <button className='rounded-full bg-red text-white px-7 py-2'>{btnText}</button>
    );
};

export default CustomButton;