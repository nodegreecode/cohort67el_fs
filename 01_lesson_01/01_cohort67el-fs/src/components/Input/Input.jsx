import './styles.css';

function Input({ name, type, placeholder, label }) {
  return (
    <>
      <div className="input-group">
        <label className="input-label" htmlFor="inputId">
          {label}
        </label>
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          id="inputId"
        />
      </div>
    </>
  );
}

export default Input;
