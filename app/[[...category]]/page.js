import HomeContainer from "@/containers/home";
import { use } from "react";
import Movies from "@/mocks/movies.json";

export default function Home({ params }) {
  let selectedCategory;
  const genderParams = use(params);
  console.log(genderParams);
  const category = Array.isArray(genderParams?.category) ? genderParams.category : [];

  selectedCategory = category.length > 0;

  return (
    <HomeContainer
      selectedCategory={{
        id: selectedCategory ? category[0] : "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}
