import './styles.css';

function Button({ name = 'Send', type = 'button', onClick = () => {} }) {
  return (
    <button type={type} className="button_component" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
