import React from 'react'

const PaperCard = ({title, description, icon}:
    {title: string;
        description: string;
        icon: any;
    }
) => {
  return (
   <>
    <div className=" bg-gray-50 p-6 linear border-l-2 shadow-sm hover:shadow-lg border-[#9F1940] transition-all duration-300 ease-in-out ">
                            <div className="question group">
                                <h4 className='text-[#04213F] font-bold'>{icon}</h4>
                                <h3 className='text-xl mt-5'>{title}</h3>
                                <div className="answer mt-3 ">
                                    <p className='  text-gray-700 '>{description}</p>
                                </div>
                            </div>
                        </div>
   </>
  )
}

export default PaperCard