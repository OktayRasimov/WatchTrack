const KEY = "5970a58f";

export async function getMovies(query) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

  const data = res.json();

  return data;
}
