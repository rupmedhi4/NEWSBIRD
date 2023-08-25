import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsCarts from "./Components/News/NewsCarts";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>

      {/* <BrowserRouter> */}
        <Navbar />
        <NewsCarts />
        {/* <Routes>
          <Route path="/sports" element={<NewsCarts />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
