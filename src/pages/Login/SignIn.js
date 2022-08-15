import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link , useLocation, useNavigate} from 'react-router-dom';
import headerLogo from '../../assets/images/logo2.png';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const [
        signInWithEmailAndPassword, user, loading,error ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        signInError = <p className='text-red text-xs mt-3 ml-2 mb-2'>{error.message}</p>
    }
    if(user){
        navigate(from,{replace:true});
    }

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='sign-in-container flex justify-center items-center'>
            <div className='w-[35rem] mx-auto rounded-xl bg-white px-10 '>
                <div className="header-logo w-64 mx-auto pt-10 pb-16"  >
                    <Link to="/" ><img src={headerLogo} alt="" className='w-100' /></Link>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                    <input
                        type='email'
                        placeholder='Email'
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
                        placeholder='Password'
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

                    {/* sign in error message will show here */}
                    {signInError}

                    <input type="submit" value='Sign in' className='text-xl text-white p-4 mb-4 rounded  bg-red ' />
                </form>

                <div className='text-center py-5'>
                    <p className='text-sm'>New to Redonion? <span className='text-red ml-2'><Link to="/signup">Sign up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;