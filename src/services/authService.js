export const getUser = async () => {
  try {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};


export const createUser = async (method = 'POST', user) => {
  console.log(user);
  try {
    const url = 'https://reqres.in/api/register';
    const response = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const res = await response.json();

    localStorage.setItem('token', res.token);
    localStorage.setItem('token-init-date', new Date().getTime());


    console.log('RES USER => ', res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (method = 'POST', user) => {
  console.log(user);
  try {
    const url = 'https://reqres.in/api/login';
    const response = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const res = await response.json();

    localStorage.setItem('token', res.token);
    localStorage.setItem('token-init-date', new Date().getTime());


    console.log('RES USER => ', res);

    return res;
  } catch (error) {
    console.log(error);
  }
};