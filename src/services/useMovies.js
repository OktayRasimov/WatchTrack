const KEY = "5970a58f";

export async function getMovies(query) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
  );

  const data = res.json();

  return data;
}
