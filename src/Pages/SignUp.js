import "../Styles/SignUp.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const password = watch("password");

  const onSubmitHandler = (data) => {
    console.log('New user:', data);
    setSuccess("Account created successfully!");
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      {success && <p style={{color: "green"}}>{success}</p>}
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Full Name</label>
        <input 
          type="text" 
          {...register("name", { required: "Name is required" })} 
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
        
        <label>Email</label>
        <input 
          type="email" 
          {...register("email", { required: "Email is required" })} 
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        
        <label>Password</label>
        <input 
          type="password" 
          {...register("password", { 
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" }
          })} 
        />
        {errors.password && <span className="error">{errors.password.message}</span>}
        
        <label>Confirm Password</label>
        <input 
          type="password" 
          {...register("confirmPassword", { 
            required: "Please confirm password",
            validate: value => value === password || "Passwords do not match"
          })} 
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
        
        <button type="submit">Sign Up</button>
      </form>
      
      <div className="login-link">
        <p>Already have an account? <span onClick={() => navigate('/login')} className="login-text">Login</span></p>
      </div>
    </div>
  );
};

export default SignUp;