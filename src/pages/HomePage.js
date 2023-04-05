import { useEffect, useState } from "react";

import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./index.scss";

function HomePage() {
  let [datael, setDatael] = useState([]);

  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((res) => {
        setDatael(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home-container">
      {datael.map((item, i) => {
        return <MovieCard Item={item} Key={i} />;
      })}
    </div>
  );
}
export default HomePage;
