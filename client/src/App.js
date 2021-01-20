import React from "react";
import Movement from "./components/Movement";
import "./App.css";

function App() {
  // const [testApiRes, setTestApiRes] = useState(null);

  // const testApiCall = () => {
  //   fetch("http://localhost:3001/testAPI")
  //     .then((res) => res.text())
  //     .then((res) => setTestApiRes(res));
  // };

  // useEffect(() => {
  //   testApiCall();
  // }, [testApiRes]);

  return (
    <div>
      <Movement />
    </div>
  );
}

export default App;
