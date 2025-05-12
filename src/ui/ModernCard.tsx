import React from 'react'

interface ModernCardProps {
    step?: string;
    title: string;
    desc: string;
}

const ModernCard: React.FC<ModernCardProps>= ({step,title,desc}) => {
  return (
    <div  className="flex gap-5 bg-gray-50 shadow-sm sm:shadow-md p-2">
    <div className="process-one flex items-center justify-center  min-w-40  h-40 rounded-lg bg-[#9F1940]">
        <h2 className='text-white text-4xl'>{step}</h2>
    </div>
    <div className="">
        <h3 className='text-lg text-[#28536B] '>{title}</h3>
        <p className='text-sm text-gray-600  mt-2'>{desc}</p>
    </div>
</div>
  )
}

export default ModernCard
