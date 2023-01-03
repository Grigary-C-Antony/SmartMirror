import axios from "axios";
import React from "react";
import Clock from "./clock";
import logo from "./assets/tcs-logo.png";

const baseURL =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1e285e89b4cc47b1bd64f61d602bcb7c";

function App() {
  const [post, setPost] = React.useState(null);
  const [quote_sec, setquote_sec] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      let art = response.data.articles;
      let fin_data = "";
      fin_data = art
        ?.map((e, i) => {
          console.log(e.title);
          return e.title;
        })
        .join(" _*_ ");
      setPost(fin_data);
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      let quote = qoutes[Math.floor(Math.random() * qoutes.length)];
      setquote_sec(quote);
    }, 10000);
  });

  let qoutes = [
    "Thousands have lived without love, not one without water.",
    "Water is life’s matter and matrix, mother and medium. There is no life without water.",
    "All the water that will ever be is, right now.",
    "You didn’t come into this world. You came out of it, like a wave from the ocean. You are not a stranger here.",
  ];
  return (
    <div
      className="bg-black flex flex-col justify-around"
      style={{ height: "100vh" }}
    >
      {/* top - date time news api link
       */}
      <div className="content pt-5 flex items-center justify-center flex-col">
        <p className="text-4xl">
          {new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-8xl mt-5">
          <Clock />
        </p>
        <marquee className="w-3/4 mt-5 text-2xl">{post}</marquee>
      </div>
      {/* middle - quotes water reading  */}
      <div className=" content text-4xl text-center mt-16 "> {quote_sec}</div>
      {/* daily usage, logo, */}
      <div className="content text-2xl flex justify-around">
        <p>Daily usage : {}</p>
        <img className="h-10" src={logo}></img>
      </div>
    </div>
  );
}

export default App;
