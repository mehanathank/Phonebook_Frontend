import "../Styles/Login.css";
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  
  const from = location.state?.from || "/contacts";

  useEffect(() => {
    fetch('/Phone.json')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error:', error));
  }, []);

  const onSubmitHandler = (fdata) => {
    const user = users.find(u => u.email === fdata.email && u.password === fdata.password);

    if (user) {
      localStorage.setItem("auth", true);
      navigate(from);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p style={{color: "red"}}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Email</label>
        <input type="email" {...register("email")} id="email" />
        
        <label>Password</label>
        <input type="password" {...register("password")} id="password" />
        
        <button type="submit">Login</button>
      </form>
      
      <div className="signup-link">
        <p>Don't have an account? <span onClick={() => navigate('/signup')} className="signup-text">Sign Up</span></p>
      </div>
    </div>
  );
};

export default Login;
