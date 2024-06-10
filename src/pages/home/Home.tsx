import { useState } from "react";
import FilterGenre from "../../components/FilterGenre/FilterGenre";
import FilterRating from "../../components/FilterRating/FilterRating";
import Search from "../../components/Search/Search";
import { HomeWrapper } from "./Home.style";

export default function Home() {
  const [searchParams, setSearchParams] = useState({});


  return (
    <HomeWrapper>
      <Search searchParams={searchParams}></Search>
      <FilterRating setSearchParams={setSearchParams}></FilterRating>
      <FilterGenre setSearchParams={setSearchParams}></FilterGenre>
    </HomeWrapper>
  );
}
