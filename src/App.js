import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import News from "./Components/News/News";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=eb84e5a5679540a7856e3c9ed6d1cf69"
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <nav className="nav">
    <div>
    Breaking News
    </div>
    <div>
    Breaking News
    </div>
    <div>
    Breaking News
    </div>
   
      
    </nav>
      <div className="App">
        {articles.map((article) => (
          <News className="orvi" article={article}></News>
        ))}
      </div>
    </>
  );
}

export default App;
