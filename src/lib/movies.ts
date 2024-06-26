const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (keyword: string, page: number) => {
	const res = await fetch(
		`${BASE_URL}/search/movie?query=${keyword}&page=${page}&api_key=${API_KEY}`,
	);
	const { results, total_pages } = await res.json();
	return {
		movies: results,
		totalPages: total_pages,
	};
};

export const fetchMovieDetails = async (id: number) => {
	const res = await fetch(
		`${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
	);
	const movieDetails = await res.json();
	return movieDetails;
};
