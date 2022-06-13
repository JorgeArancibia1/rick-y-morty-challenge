import Swal from 'sweetalert2';
import { types } from '../types/types';
import { createUser, loginUser } from '../../services/authService';

export const startLogin = (email, password) => {
	return async (dispatch) => {
		const { token } = await loginUser('POST', { email, password })
		console.log(token);

		if (token) {
			localStorage.setItem('token', token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				login({
					token
				}),
			);
		} else {
			Swal.fire('Error', 'Ha ocurrido un error al ingresar a la plataforma', 'error');
		}
	};
};


export const startRegister = (email, password) => {
	return async (dispatch) => {
		const { token } = await createUser('POST', { email, password });

		if (token) {
			localStorage.setItem('token', token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				login({
					token
				}),
			);
		} else {
			Swal.fire('Error', 'Ha ocurrido un problema al registrar el usuario', 'error');
		}
	};
};

export const login = (token) => ({
	type: types.authLogin,
	payload: token,
});

export const startLogout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch(logout());
	};
};

const logout = () => ({ type: types.authLogout });
