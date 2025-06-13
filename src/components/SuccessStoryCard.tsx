import React from 'react'

const SuccessStoryCard = ({
    title = 'Company Name',
    tags = [],
    icon,
    challenge,
    solution,
    ctaText = 'Read Full Story',
    ctaLink = '#',
  }: {
    title?: string;
    tags?: string[];
    icon?: React.ReactNode;
    challenge?: string;
    solution?: string;
    ctaText?: string;
    ctaLink?: string;
  }) => {
  return (
<>
<div className="transition-all duration-300 cursor-pointer glass-effect overflow-hidden rounded-xl px-5 py-4 border-2 border-gray-300 hover:bg-gray-50 hover:shadow-sm ">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#9F1940] p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#fff]">{title}</h3>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white border border-white/10 text-sm px-4 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Challenge */}
      {challenge && (
        <div className="mb-4">
          <h4 className="text-[#fff] text-base font-semibold mb-1">Challenge</h4>
          <p className="text-sm text-[#fff] leading-relaxed">
            {challenge}
          </p>
        </div>
      )}

      {/* Solution */}
      {solution && (
        <div className="mb-4 border-t border-white/10 pt-4">
          <h4 className="text-white text-base font-semibold mb-1">Solution</h4>
          <p className="text-sm text-white/80 leading-relaxed">
            {solution}
          </p>
        </div>
      )}

      {/* CTA */}
      {ctaLink && (
        <div className="mt-4">
          <a href={ctaLink} className="text-[#9F1940] font-medium hover:underline text-sm">
            {ctaText}
          </a>
        </div>
      )}
    </div>
</>  )
}

export default SuccessStoryCard