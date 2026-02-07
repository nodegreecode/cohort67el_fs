import './styles.css';

function Button({ name = 'Send', type = 'button' }) {
  return (
    <button type={type} className="button_component">
      {name}
    </button>
  );
}

export default Button;
