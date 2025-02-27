import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from '../redux/slices/userSlice';
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.user);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        dispatch(RegisterUser(data));
    };

    return (
      <div className="pt-40">
        <div className="max-w-md mx-auto px-6">
            <h2 className="text-4xl font-montserrat font-normal text-center mb-2">REGISTER</h2>
            <p className="text-center text-sm font-montserrat font-light text-black mb-12">
            STEP INTO A WORLD WHERE YOUR SKIN FEELS AT HOME.
            <br />
          WELCOME IN!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { 
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters"
                            }
                        })}
                        className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("password", { 
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                        className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2 text-gray-500"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="text-right">
                    <a href="#forgot" className="text-sm font-light text-gray-600 no-underline hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-32 px-9 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300"
                >
                    REGISTER
                </button>

                <p className="text-sm font-light text-gray-600 text-center">
                    Have an account?{" "}
                    <span 
                        onClick={() => navigate("/login")} 
                        className="cursor-pointer text-sm font-light text-gray-600 no-underline hover:underline"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
        </div>
    );
};

export default Register;