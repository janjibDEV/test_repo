import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [stockInfo, setStockInfo] = useState({});
  const searchStock = async () => {
    if (setQuote) {
      let uri = `https://apis.iex.cloud/v1/data/core/quote/${quote}/:key?token=pk_99c6308179374be0b7332354c5b05e36`;
      // console.log(uri);
      // await fetch(uri).then((response) => console.log(response.json()[0]));
      await axios
        .get(uri)
        .then((response) => setStockInfo((stockInfo) => response.data[0]));
    }
  };

  return (
    <div className="App">
      <label>Enter a quote: </label>
      <input value={quote} onChange={(e) => setQuote(e.target.value)} />
      <button onClick={searchStock}>Search</button>
      {stockInfo && <p>stock: {stockInfo.symbol}</p>}
      {stockInfo &&
        Object.keys(stockInfo).map((i) => {
          return (
            <p>
              {i}: {stockInfo[i]}
            </p>
          );
        })}
    </div>
  );
}

export default App;
