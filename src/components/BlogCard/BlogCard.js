import React from 'react'

export default function BlogCard() {
    return (
        <div>
            <div className="w-full h-full bg-[#f5f5f5] bordered" style={{ fontFamily: 'Poppins', }}>
                <div className='h-32 md:h-60 p-3  overflow-hidden'>
                    <img className='h-full w-auto m-auto' src="https://berkshirefurniture.com/wp-content/uploads/2018/10/HANDSTONE-PROCESS.jpg" alt="Shoes" />
                </div>
                <div className="flex flex-col p-4 pt-0 gap-0 md:gap-2">
                    <h2 className="mt-2 md:mt-0 text-sm md:text-base capitalize text-center gap-4 tooltip" data-tip={"HANDSTONE PROCESS"}>HANDSTONE PROCESS
                    </h2>

                    <span className='text-[13px] font-normal text-center'>From the look, finish, fit and functionality you can tell that one of the trademarks of Handstone Furniture is craftsmanship. Its something we take old world attention to detail in, but it</span>
                    <span className='text-primary text-center cursor-pointer'>Read More</span>
                </div>
            </div>
        </div>
    )
}
