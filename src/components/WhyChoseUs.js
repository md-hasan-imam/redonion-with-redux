import React from 'react';
import chef1 from '../assets/images/adult-blur-blurred-background-687824.png';
import chef2 from '../assets/images/chef-cook-food-33614.png';
import deliveryimg from '../assets/images/architecture-building-city-2047397.png';





const WhyChoseUs = () => {
    return (
        // why chose us section strarts
        <section className='sm:p-5 md:p-10 mx-auto '>

            {/* why chose us section header */}
            <div className='sm:w-full  md:w-3/5 lg:w-2/5'>
                <h4 className='text-4xl '>Why you chose us</h4>
                <p className='text-lg  my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis quos reprehenderit.</p>
            </div>

            {/* why chose us section card 1  */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-10 sm:gap-5  '>
                <div className='hover:shadow-2xl rounded-2xl transition-all ease-linear duration-400'>
                    <img src={chef1} alt="chef" className='block mx-auto' />
                    <div className='flex p-5 '>
                        <div className='mr-5 mt-5'>
                            <div className='h-10 w-10 bg-red flex items-center justify-center rounded-full'>
                                <svg height='16px' width='16px' className='inline-block  mx-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0C348.8 0 448 35.2 448 80V416C448 433.7 433.7 448 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V448C14.33 448 0 433.7 0 416V80C0 35.2 99.19 0 224 0zM64 256C64 273.7 78.33 288 96 288H352C369.7 288 384 273.7 384 256V128C384 110.3 369.7 96 352 96H96C78.33 96 64 110.3 64 128V256zM80 400C97.67 400 112 385.7 112 368C112 350.3 97.67 336 80 336C62.33 336 48 350.3 48 368C48 385.7 62.33 400 80 400zM368 400C385.7 400 400 385.7 400 368C400 350.3 385.7 336 368 336C350.3 336 336 350.3 336 368C336 385.7 350.3 400 368 400z" /></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl mt-2'>Fast Delivery</h3>
                            <p className='mb-3 mt-3 text-sm' style={{ color: '#a09d9d' }}>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <a href="" className='font-semibold text-blue'>See more
                                <svg className='h-6 w-6 bg-green rounded-full inline-block p-1 mx-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></a>

                        </div>
                    </div>
                </div>

                {/* why chose us section card 2  */}
                <div className='hover:shadow-2xl rounded-2xl transition-all ease-linear duration-400'>
                    <img src={chef2} alt="chef" className='block mx-auto' />
                    <div className='flex p-5'>
                        <div className='mr-5 mt-5'>
                            <div className='h-10 w-10 bg-red flex items-center justify-center rounded-full'>
                                <svg height='18px' width='18px' className='inline-block  mx-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" /></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl mt-3 '>A Good Auto Responder</h3>
                            <p className='mb-3 mt-3 text-sm' style={{ color: '#a09d9d' }}>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <a href="" className='font-semibold text-blue'>See more
                                <svg className='h-6 w-6 bg-green rounded-full inline-block p-1 mx-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></a>
                        </div>
                    </div>
                </div>

                {/* why chose us section card 3  */}
                <div className='hover:shadow-2xl rounded-2xl transition-all ease-linear duration-400' >
                    <img src={deliveryimg} alt="chef" className='block mx-auto' />
                    <div className='flex p-5'>
                        <div className='mr-5 mt-5'>
                            <div className='h-10 w-10 bg-red flex items-center justify-center rounded-full'>
                                <svg height='18px' width='18px' className='inline-block  mx-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z"/></svg>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl mt-3 '>Home Delivery</h3>
                            <p className='mb-3 mt-3 text-sm' style={{ color: '#a09d9d' }}>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <a href="" className='font-semibold text-blue'>See more
                                <svg className='h-6 w-6 bg-green rounded-full inline-block p-1 mx-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;