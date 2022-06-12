export const getInfo = async () => {
  try {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const res = await response.json();
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};