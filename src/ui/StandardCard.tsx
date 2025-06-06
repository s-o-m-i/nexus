import React from 'react'

interface StandardCardProps {
    count: number;
    title: string;
    desc: string;
}

const StandardCard: React.FC<StandardCardProps> = ({count, title, desc }) => {
    return (
        <div className=' bg-[#F9FAFB] border-gray-200 p-6 relative border min-h-[200px]  grid grid-cols-12  rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className="sm:col-span-2 col-span-12 flex  items-center ">
                <div className="w-[50px] h-[50px] bg-[#9F193F] shadow-md rounded-[50%] flex items-center justify-center">
                <h2 className='text-xl text-white'>{count}</h2>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-3 flex mt-8 sm:mt-0  items-center ">
          <h3 className='text-xl font-bold text-[#04213F]'>{title}</h3>
            </div>
            <div className="col-span-12 mt-5 sm:mt-0 sm:col-span-7 flex  items-center ">

            <p className=" ">
                {desc}
            </p>
            </div>
        </div>
    )
}

export default StandardCard
