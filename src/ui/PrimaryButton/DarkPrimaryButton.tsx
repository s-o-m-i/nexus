import React from 'react';


export interface DarkPrimaryButtonProps {
    text: string
}

const DarkPrimaryButton: React.FC<DarkPrimaryButtonProps> = ({text}) => {
    return (
        <div className='relative group'>
            <div className="box absolute top-0 left-0 rounded-bl-full rounded-tr-full rotate-1 group-hover:hidden transition-all duration-300 ease-in-out h-[50px] w-full bg-[#04213F]">

            </div>
            <button className="button-primary py-[12px] px-[5px] sm:px-[40px] relative overflow-hidden font-medium text-gray-600 bg-white border border-gray-100 rounded-lg shadow-inner group">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-1 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-0 group-hover:opacity-10 group-hover:translate-x-0 z-10"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-8 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-0 group-hover:opacity-10 group-hover:translate-x-0 z-10"></span>
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#04213F] group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#04213F] group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#04213F] group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#04213F] group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-to-r from-[#04213F] from-20% via-[#04213F] via-40% to-[#04213F] to-70% opacity-0 group-hover:opacity-40"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center w-full text-[12px] sm:text-[16px]">{text}</span>
            </button>
        </div>
    );
};

export default DarkPrimaryButton;