export const getInfoCharacters = async () => {
  try {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoOneCharacter = async (id) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoLocation = async () => {
  try {
    const url = 'https://rickandmortyapi.com/api/location';
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoOneLocation = async (id) => {
  try {
    const url = `https://rickandmortyapi.com/api/location/${id}`;
    const response = await fetch(url);
    const res = await response.json();
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoEpisode = async () => {
  try {
    const url = 'https://rickandmortyapi.com/api/episode';
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoOneEpisode = async (id) => {
  try {
    const url = `https://rickandmortyapi.com/api/episode/${id}`;
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};