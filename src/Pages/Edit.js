import { useParams } from "react-router-dom";

const Edit =()=>{
    const{editid}=useParams();
     console.log(editid);
    return(
        <div>
            <h1>Edit Contact</h1>
            <p><b>Edit Contact Id:{editid}</b></p>
        </div>
    );
};
export default Edit;