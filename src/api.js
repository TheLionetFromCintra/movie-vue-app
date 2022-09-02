import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmE1YzQ1YmE2ZmE0MzQxZDFkNThiNGRmOTg3MGNkYiIsInN1YiI6IjYzMGRjY2ZjM2Q3NDU0MDA3ZGJmY2ZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NEHEF0r56oGwvsO6GfGaov16kiaYbZxcQvayg2D7a6c";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
