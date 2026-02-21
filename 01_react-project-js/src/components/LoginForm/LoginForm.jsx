import './styles.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function LoginForm() {
  /* const login = (event) => {
  event.preventDefault();
  console.log('Button Login works!!!');
};*/
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
        {/*<Button onClick={login} name="Login" type="submit" />*/}
        {/*<button onClick={login} type="button">
          Login
        </button>*/}
        {/*<button onClick={() => login('Button works!!!')} type="button">
          Login
        </button> */}
      </form>
    </>
  );
}

export default LoginForm;
