import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation} from 'react-router-dom';
import headerLogo from '../../assets/images/logo2.png';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      let signUpError;
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (error) {
        signUpError = <p className='text-red text-xs mt-3 mb-2 ml-2'>{error.message}</p>
    }

      if (loading) {
        return <Loading></Loading>;
      }

      if (user) {
       navigate(from,{replace:true});
      }

    const onSubmit = data => {
        const {email, password} = data;
        console.log(email,password);
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='sign-in-container flex justify-center items-center '>
            <div className='w-[35rem] mx-auto rounded-xl bg-white px-10'>
                <div className="header-logo w-64 mx-auto pt-10 pb-16"  >
                    <Link to="/" ><img src={headerLogo} alt="" className='w-100' /></Link>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                <input
                        type='name'
                        placeholder='Name'
                        className=' text-xl outline-none rounded p-4 mb-1 bg-light-gray'
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} />
                    <label htmlFor="name" className='mb-4 ml-1'>
                        {errors.name?.type === 'required' && <span className='text-xs text-red '>{errors.name.message}</span>}
                    </label>
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

                    {/* sign up error message will show here */}
                    {signUpError}

                    <input type="submit" value='Sign up' className= 'text-xl text-white p-4 mb-3 rounded  bg-red ' />

                </form>

                <div className='text-center py-5'>
                    <p className='text-sm'>Already have an account? <span className='text-red ml-2 text-semibold'><Link to="/signin">Sign in</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;