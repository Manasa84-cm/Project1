import React from 'react'



const Frist = () => {
    return (
        <div className='bg-[#C39898] h-[170vh] w-[100vw]'>

            <div className='font-light pt-30 text-amber-50 text-center text-8xl mb-40'>
                {
                    "Capture Moments".split("").map((letter, i) => (
                        <span
                            key={i}
                            className="  text-[#7D1C4A] inline-block animate-bounce hover:text-sky-500 transition-colors"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))
                }
            </div>

            {/* Black container */}
            <div className='bg-black h-[120vh] w-[90vw] ml-20 '>
                <div className='h-30 w-500 flex gap-40 text-2xl'>
                    <div className='text-9  flex  pt-2 w-[60vh] font-light ml-0.1 text-[#DDDAD0]'>
                        <ul>
                            <li>Shop</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className='text-center text-8xl text-[#DDDAD0]'>
                        NITE
                    </div>

                    <div className='flex w-100 text-2xl text-[#DDDAD0] font-light justify-between pt-4 mr-4'>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Cart</div>
                    </div>
                </div>

                <div className='ml-210 h-[5%] w-[35vw] mt-0.1 pb-0.2'>
                    <img src='src/assets/P1.png' alt="P1" />
                </div>

                <div className='text-[#DDDAD0] w-6xs ml-4 pb-10'>
                    <p className='font-bold text-4xl pb-20'>Lorem de ipsumes dolors aments.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consec lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore. <br />
                        Amet, consec lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
                        sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </p>
                </div>

                <div className='mt-20 w-[200px] h=[10px] mr-80 text-center ml-5 border border-[#e0d6d1] text-[#e0d6d1] px-5 py-2 bg-transparent hover:bg-[#e0d6d1] hover:text-black transition'>
                    <button>Visit The Shop</button>
                </div>
               
               
            </div>
            
        </div>
    )
}

export default Frist
