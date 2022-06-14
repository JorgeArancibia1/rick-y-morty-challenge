import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { startRegister } from '../redux/actions/authAction';
import { createUser } from '../services/authService';
import { useDispatch } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();
    createUser('POST', { email, password })
    dispatch(startRegister(email, password));
  };

  return (
    <div className="container-home">
      <div className="container-title-form">
        <form className="form-home" onSubmit={handleRegister}>
          <h2 className="title-login">Register</h2>

          <input
            type="text"
            placeholder="Email"
            name="email"
            className=""
            autoComplete="off"
            value={email}
            onChange={handleRegisterInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className=""
            autoComplete="off"
            value={password}
            onChange={handleRegisterInputChange}
          />

          <input type="submit" className="login-button" value="Register" />
          <Link className="mt-2" to="/login">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};