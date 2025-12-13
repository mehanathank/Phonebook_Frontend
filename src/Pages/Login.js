import "../Styles/Login.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

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
      navigate("/home");
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
    </div>
  );
};

export default Login;
