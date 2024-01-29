import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
