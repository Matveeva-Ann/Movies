

const buildUrl = (...params: string[]) => {
  return `https://66615ee663e6a0189fe97b42.mockapi.io/movies/${params}`;
};

const sendRequest = async (url: string, headers?: object) => {
  const response = await fetch(url, headers);

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export const getMovies = async () => {
  const url = buildUrl('allMovies');
  return await sendRequest(url);
};
