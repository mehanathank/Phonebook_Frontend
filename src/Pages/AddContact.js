import "../Styles/AddContact.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const AddContact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { },
  } = useForm({
    defaultValues: {
      id: Date.now().toString(),
      userId: "u1",
      name: "",
      phone: "",
      email: "",
      category: "friends",
      date: new Date().toISOString().split('T')[0]
    }
  });

  const onSubmitHandler = async (fdata) => {
    try {
      const newContact = {
        ...fdata,
        favorite: false,
        trash: false,
        createdAt: fdata.date,
        profilePic: "Images/phone.png"
      };
      await api.createContact(newContact);
      console.log('Contact added successfully');
      navigate('/contacts');
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className="add-contact">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>ID:</label>
        <input {...register("id")} type="text" />

        <label>User ID:</label>
        <input {...register("userId")} type="text" />

        <label>Name:</label>
        <input {...register("name")} type="text" />

        <label>Phone Number:</label>
        <input {...register("phone")} type="text" />

        <label>Email:</label>
        <input {...register("email")} type="email" />

        <label>Category:</label>
        <select {...register("category")}>
          <option value="">Select Category</option>
          <option value="friends">Friends</option>
          <option value="favorites">Favorites</option>
          <option value="business">Business</option>
        </select>

        <label>Date:</label>
        <input {...register("date")} type="text" placeholder="Enter date" />

        <button type="submit">Add Contact</button>
      </form>


    </div>
  );
};

export default AddContact;