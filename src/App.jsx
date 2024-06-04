import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "./data/movies";
function App() {
  return (
    <div
      className="App"
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1
          css={css`
            color: black;
            text-align: center;
            padding-top: 30px;
          `}
        >
          Movie List Section
        </h1>
        <ul>
          {movies.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  css={css`
                    box-sizing: border-box;
                    display: flex;
                    align-items: flex-start;
                    background-color: white;
                    margin: 20px 0px;
                    top: 157px;
                    left: 300px;
                    border-radius: 10px;
                    opacity: 0px;
                    color: black;
                    width: 450px;
                    height: 250px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                  `}
                >
                  <div
                    css={css`
                      padding: 15px;
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      css={css`
                        object-fit: cover;
                        display: block;
                        width: 102px;
                        height: 100px;
                        border-radius: 10px;
                      `}
                    />
                  </div>
                  <div
                    classname="movies-info"
                    css={css`
                      padding-top: 15px;
                      display: flex;
                      flex-direction: column;
                      gap: 15px;
                    `}
                  >
                    <p>Title: {item.title}</p>
                    <p>Year: {item.year}</p>
                    <p>Runtime: {item.runtime}s</p>
                    <div
                      className="genres"
                      css={css`
                        display: flex;
                        justify-content: flex-start;
                      `}
                    >
                      <span>Genre: </span>
                      <ul>
                        {item.genres.map((item) => {
                          return (
                            <span
                              css={css`
                                background-color: #eaac99;
                                width: fit-content;
                                height: 27px;
                                border-radius: 10px;
                                text-align: center;
                                padding: 0px 10px 0px 10px;
                                margin: 2px;
                              `}
                            >
                              {item}
                            </span>
                          );
                        })}
                      </ul>
                    </div>

                    <p>IMDB Rating: {item.imdbRating}</p>
                    <p>IMDB Vote: {item.imdbVotes}</p>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
