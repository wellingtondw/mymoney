import React from "react";
import useGet from "./useGet";
import usePost from "./usePost";

const url = "https://mymoney-wls.firebaseio.com/moves/2020-03.json";

function App() {
  const data = useGet(url);
  const [postData, post] = usePost(url);

  const saveNew = () => {
    post({ value: "10", description: "hi" });
  };

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>My money</h1>
      {JSON.stringify(data)}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
    </div>
  );
}

export default App;
