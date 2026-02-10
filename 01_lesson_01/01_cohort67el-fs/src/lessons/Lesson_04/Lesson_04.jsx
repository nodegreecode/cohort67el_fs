import './styles.css';
import Button from '../../components/Button/Button.jsx';
import Counter from '../../components/Counter/Counter.jsx';

function Lesson_04() {
  /* const login = (event) => {
    event.preventDefault();
    console.log('Button Login works!!!');
  };*/
  return (
    <div className="lesson_04_page_wrapper">
      <Counter />
      {/* <form onSubmit={login}>
        <div>
          <label htmlFor="inputId">Email</label>
          <input type="email" id="inputEmail" />
        </div>
        <div>
          <label htmlFor="inputId">Password</label>
          <input type="email" id="inputPassword" />
        </div>
        <Button onClick={login} name="Login" type="submit" />
         <button onClick={login} type="button">
          Login
        </button>*/}
      {/*<button onClick={() => login('Button works!!!')} type="button">
          Login
        </button>
      </form>*/}
    </div>
  );
}

export default Lesson_04;
