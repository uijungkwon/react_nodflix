const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";
const LANGUAGE = "en-US";
const REGION = "KR";
const TAIL_PATH = `api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`;

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
//
export interface IGenre {
  id: number;
  name: string;
}
interface INetworks {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
export interface IDetailInfo {
  id: number;
  overview: string;
  title?: string;
  original_title?: string;
  name?: string;
  vote_average: number;
  runtime: number;
  backdrop_path: string;
  poster_path: string;
  genres: IGenre[];
  release_date?: string;
  first_air_date?: string;
  networks: INetworks[];
  tagline?: string;
}


export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

// Movies - top_rated
export function getTopRatedMovies() {
  return fetch(`${BASE_PATH}/movie/top_rated?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}

// Movies - Upcoming
export function getUpcomingMovies() {
  return fetch(`${BASE_PATH}/movie/upcoming?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}


// TvShows
export function getPopularTvShows() {
  return fetch(`${BASE_PATH}/tv/popular?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}
