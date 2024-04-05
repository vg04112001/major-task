import styles from '../Contact.module.css'

const CustomInput = ({label, htmlFor, type, id, name, value, minLength, maxLength, onChange, pattern, placeholder}: any) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <br />
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        className={`${styles.inputElement}`}
        pattern={pattern}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default CustomInput;