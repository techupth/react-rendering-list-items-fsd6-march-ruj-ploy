import "./App.css";
import MoviesList from "./data/movies";
import movies from "./data/movies";


function App() {
  return (
    <div className="flex flex-col justify-center  gap-2">
        <MoviesList/>
    </div>
  );
}

export default App;
