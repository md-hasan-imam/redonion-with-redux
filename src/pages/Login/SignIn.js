import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/logo2.png';


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='sign-in-container flex justify-center items-center'>
            <div className='w-[30rem] mx-auto rounded-xl bg-white px-10 '>
                <div className="header-logo w-64 mx-auto pt-10 pb-12"  >
                    <Link to="/" ><img src={headerLogo} alt="" className='w-100' /></Link>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                    <input
                        type='email'
                        placeholder='Your email here'
                        className='text-xl outline-none rounded p-4 mb-1 bg-light-gray '
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                }
                            })} />
                    <label htmlFor="email" className='mb-4 ml-1'>
                        {errors.email?.type === 'required' && <span className='text-xs text-red '>{errors.email.message}</span>}
                    </label>

                    <input
                        type="password"
                        placeholder='Your password'
                        className='text-xl outline-none rounded p-4 mb-1 bg-light-gray'
                        {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                    message: "Password must be 6 character including one letter and one number"

                                }
                            })} />
                    <label htmlFor="password" className='mb-4 ml-1'>
                        {errors.password?.type === 'required' && <span className='text-xs text-red'>{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span className='text-xs text-red'>{errors.password.message}</span>}
                    </label>

                    <input type="submit" value='Sign in' className='text-xl text-white p-4 my-4 rounded  bg-red ' />

                </form>

                <div className='text-center py-5'>
                    <p className='text-sm'>New to Redonion? <span className='text-red ml-2'><Link to="/signup">Sign up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;