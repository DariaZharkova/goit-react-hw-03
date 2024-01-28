import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export const Contact = ({ item, onDelete }) => {
  return (
    <>
      <p>
        <FaUser />
        {item.name}
      </p>
      <p>
        <FaPhone /> {item.number}
      </p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </>
  );
};
