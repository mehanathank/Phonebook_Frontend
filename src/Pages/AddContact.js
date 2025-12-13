import "../Styles/AddContact.css";
import { useForm } from 'react-hook-form';

const AddContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "9",
      userId: "u1",
      name: "John Doe",
      phone: "9876543210",
      email: "john@example.com",
      category: "friends",
      date: "2025-01-20"
    }
  });

  const onSubmitHandler = (fdata) => {
    console.log({
      ...fdata,
      favorite: false,
      trash: false,
      createdAt: fdata.date,
      profilePic: "Images/phone.png"
    });
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