import React from 'react'

interface StandardCardProps {
    count: number;
    title: string;
    desc: string;
}

const StandardCard: React.FC<StandardCardProps> = ({count, title, desc }) => {
    return (
        <div className=' bg-[#fff] p-6 relative border-t-2 min-h-[200px] border-[#9F1940] grid grid-cols-12  rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className="w-[40px] h-[40px] absolute -top-5 -right-5 bg-[#F3A462] rounded-full"></div>
            <div className="col-span-2 flex  items-center ">
                <div className="w-[50px] h-[50px] bg-[#9F193F] shadow-md rounded-[50%] flex items-center justify-center">
                <h2 className='text-xl text-white'>{count}</h2>
                </div>
            </div>
            <div className="col-span-3 flex  items-center ">
          <h3 className='text-xl font-bold text-[#04213F]'>{title}</h3>
            </div>
            <div className="col-span-7 flex  items-center ">

            <p className=" ">
                {desc}
            </p>
            </div>
        </div>
    )
}

export default StandardCard
