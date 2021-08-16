import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Quotes from "./components/Quotes";

function App() {
  const [quotes, setQuoetes] = useState([]);
  const [isPending, setIsPending] = useState(false);

  //fake JSON server
  useEffect(() => {
    axios("http://localhost:8000/quotes").then((resp) => {
      setQuoetes(resp.data);
      setIsPending(true);
    });
  }, []);

  return (
    <>
      {!isPending && <div>Loading...</div>}
      {quotes && <Quotes quotes={quotes} />}
    </>
  );
}

export default App;
