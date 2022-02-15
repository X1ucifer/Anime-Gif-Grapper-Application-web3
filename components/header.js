import React from 'react'

function Header({user}) {
    return (

        <>

            <div className='absolute  top-0 p-10 w-full bg-gradient-to-b from-neutral-900 to-transparent h-5 z-[1]'> </div>
            <div className='fixed w-full h-90 flex justify-between	items-center p-4 z-10'>

                <div>
                    <h1 className='font-medium text-lg antialiased text-white'>
                        DataBox
                    </h1>
                </div>

                <div className='cursor-pointer border-2 py-1 px-3'>
                    <h5 className=" font-semibold text-white text-sm " >{user.slice(0, 5)}...{user.slice(38)}</h5>

                </div>
            </div>
           
        </>
    )
}

export default Header