import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

function App() {
  const apiKey = "1314df5c1b5e408ea1551fe1a106fca0";

  const [category, setCategory] = useState("general");

  const [progress, setProgress] = useState(0);

  return (
    <>
      <NavBar setCategory={setCategory} />
      <LoadingBar
        height={3}
        color="#667eea"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <News
        pageSize={10}
        category={category}
        setProgress={setProgress}
        apiKey={apiKey}
      />
      <Footer />
    </>
  );
}

export default App;
