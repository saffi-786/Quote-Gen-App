import { useEffect, useState } from "react";

const url = "https://api.quotable.io/random";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  const handleClick = () => {
    fetch(url)
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-slate-600">
      <div className="w-1/3 rounded-xl shadow-lg p-2 bg-lime-200">
        <p className="text-2xl font-serif text-center">{quote}</p>
        <p className="text-md font-serif font-bold italic text-center mt-1">
          ~{author}~
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
