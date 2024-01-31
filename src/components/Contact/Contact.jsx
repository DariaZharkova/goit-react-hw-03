import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export const Contact = ({ item, onDelete }) => {
  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} /> {item.number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
};
