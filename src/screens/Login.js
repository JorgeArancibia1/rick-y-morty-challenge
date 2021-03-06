import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { startLogin } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(email, password));
    navigate('/')
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
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleLoginInputChange}
          />
          <br />
          <input
            className="input-password"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={password}
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