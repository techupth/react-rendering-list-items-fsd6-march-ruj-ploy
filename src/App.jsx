import "./App.css";
import movies from "./data/movies";

function App() {
  console.log(movies);
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movies List Section</h1>
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => {
          return (
            <div className="movie-box" key={index}>
              <img src={item.image} alt="" />
              <div>
                <p>Title: {item.title}</p>
                <p>Year: {item.year}</p>
                <p>Runtime: {item.runtime}</p>
                <div className="genres">
                  Genres:
                  {item.genres.map((item) => {
                    return <span>{item}</span>;
                  })}
                </div>
                <p>IMBD Ratings: {item.imdbRating}</p>
                <p>IMBD Votes: {item.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
