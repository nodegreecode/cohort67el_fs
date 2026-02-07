import './styles.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function LoginForm() {
  return (
    <>
      <form>
        <h2 className="form-title">Login form</h2>
        <div className="form-group">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
        </div>
        <Button name="Login" type="submit" />
      </form>
    </>
  );
}

export default LoginForm;
