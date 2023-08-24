import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./Components/Redux/Slices/NewsSlices";

function App() {
  const { data, isloading, error } = useSelector((state) => state.NewsSlices);

  const dispatch = useDispatch();

  console.log(data);

  if (isloading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Navbar />
      <button onClick={(e) => dispatch(fetchNews())}>click</button>
      {data && data.articles ? (
        <ul>
          {data.articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              {/* You can add more properties of the article */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles to display</p>
      )}
    </>
  );
}

export default App;
