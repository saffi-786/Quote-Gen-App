import { useEffect, useState } from "react";
import useQuoteInfo from "./Hooks/useQuoteInfo";

const url = "https://api.quotable.io/random";

function App() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setQuote({
          ...quote,
          content: response.content,
          author: response.author,
        });
      });
  }, []);

  const handleClick = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setQuote({
          ...quote,
          content: response.content,
          author: response.author,
        });
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-slate-600">
      <div className="md:w-1/3 w-3/4 rounded-xl shadow-lg p-2 bg-lime-200 ">
        <p className="text-2xl font-serif text-center">{quote.content}</p>
        <p className="text-md font-serif font-bold italic text-center mt-1">
          ~{quote.author}~
        </p>
      </div>

      <button
        className="bg-lime-200 hover:bg-lime-300 font-bold py-2 px-4 rounded-full mt-2"
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
