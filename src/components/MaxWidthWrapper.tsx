import React, { ReactNode } from 'react'
function MaxWidthWrapper({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0, ${className}`
        }>
            {children}
        </div>
    )
}

export default MaxWidthWrapper