import React, { use } from "react";
import Movies from "@/mocks/movies.json";
import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";

const MoviePage = ({ params, searchParams }) => {
  const movieParams = use(params);
  const errorParams = use(searchParams);
  const movieDetails = Movies.results.find((movie) => movie.id.toString() === movieParams.id);

  if (!movieDetails) {
    notFound();
  }

  if (errorParams.error === "true") {
    throw new Error("Error happened");
  }

  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
