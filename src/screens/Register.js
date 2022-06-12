// import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
// import { startRegister } from '../redux/actions/authAction';

export const Register = () => {
  // const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    remail: '',
    rpassword: '',
  });

  const { remail, rpassword } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    // dispatch(startRegister(remail, rpassword));
  };

  return (
    <div className="container-home">
      <div className="container-title-form">
        <form className="form-home" onSubmit={handleRegister}>
          <h2 className="title-login">Register</h2>

          <input
            type="text"
            placeholder="Email"
            name="remail"
            className=""
            autoComplete="off"
            value={remail}
            onChange={handleRegisterInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="rpassword1"
            className=""
            autoComplete="off"
            value={rpassword}
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