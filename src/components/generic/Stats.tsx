import React from 'react'

const Stats = () => {
    return (
        <div>
            {/* Stats section with minimalistic design */}
            <div className="mt-20 bg-[#2D5C76] rounded-2xl p-4 py-8 sm:py-10 sm:p-10 text-white shadow-xl">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold mb-2">Our Design Excellence by the Numbers</h3>
                    <p className="text-white/80">Results that demonstrate our commitment to quality</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2 text-white">750+</div>
                        <div className="text-white/80 text-sm">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2 text-white">98%</div>
                        <div className="text-white/80 text-sm">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2 text-white">15+</div>
                        <div className="text-white/80 text-sm">Design Awards</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2 text-white">12+</div>
                        <div className="text-white/80 text-sm">Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
