import { useNavigate } from "react-router-dom";

const PhoneCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="phonecard"
      onClick={() => navigate(`phome/${item.info.id}`)}
    >
      <img
        src={`/images/${item.info.profilePic}`} 
        alt={item.info.name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h3>{item.info.name}</h3>
    </div>
  );
};

export default PhoneCard;
