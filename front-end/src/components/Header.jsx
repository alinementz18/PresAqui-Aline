import React from 'react'

const Header = () => {
    return (
        <header className="shadow-md">

            <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto ">
                <div className="flex items-center">
                    <img
                        className="h-20"
                        src="data:image/png;base64,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" alt="Logo do site" />
                    <p className="text-2xl font-bold text-primary-400 ">PrestAqui</p>
                </div>

                <div className="hidden lg:flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md">
                    <p className="border-r pr-4 border-r-gray-300">Localização</p>
                    <p className="border-r px-4 border-r-gray-300">Data</p>
                    <p className="px-4">Prestador</p>

                    <div className="bg-primary-400 rounded-full p-2 text-white">


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div> 

                </div>

                <div className="flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md gap-2">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="size-5 text-gray-600">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>


                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-gray-600">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    <p className="max-w-20 truncate sm:max-w-32">Aline Mentz</p>                  

                </div>
            </div>
        </header>
    )
}

export default Header