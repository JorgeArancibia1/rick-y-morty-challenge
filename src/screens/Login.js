// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
// import { startLogin } from '../redux/actions/authAction';

export const Login = () => {
  // const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lemail: '',
    lpassword: '',
  });

  const { lemail, lpassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch(startLogin(lemail, lpassword));
  };

  return (
    <div className="container-home">
      <div className="container-title-form">
        <form className="form-home" onSubmit={handleLogin}>
          <h2 className="title-login">Login</h2>
          <br />
          <input
            className="input-name"
            type="text"
            placeholder="Email"
            name="lemail"
            autoComplete="off"
            value={lemail}
            onChange={handleLoginInputChange}
          />
          <br />
          <input
            className="input-password"
            type="password"
            placeholder="Password"
            name="lpassword"
            autoComplete="off"
            value={lpassword}
            onChange={handleLoginInputChange}
          />
          <br />
          <input className="login-button" type="submit" value="Entrar" />
          <br />
          <Link to="/register">Sign up</Link>
        </form>
      </div>
    </div>
  );
};