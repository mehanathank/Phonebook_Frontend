import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const AddUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (userData) => {
    try {
      const newUser = {
        id: `u${Date.now()}`,
        ...userData,
        profilePic: "Images/phone.png"
      };
      await api.createUser(newUser);
      console.log('User created successfully');
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input 
            {...register("name", { required: "Name is required" })} 
            type="text" 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input 
            {...register("email", { required: "Email is required" })} 
            type="email" 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input 
            {...register("password", { required: "Password is required" })} 
            type="password" 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
        </div>

        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '4px',
            marginRight: '10px'
          }}
        >
          Create User
        </button>
        
        <button 
          type="button" 
          onClick={() => navigate('/')}
          style={{ 
            backgroundColor: '#6c757d', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '4px'
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddUser;