import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const  REACT_APP_WIKI_POLLING_DATA = process.env.REACT_APP_WIKI_POLLING_DATA;

function WikipidiaData(props) {
  const location = useLocation();
  const { query} = location.state || {};
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log('wikipidiaData',location.state);
  

  return (
    <div>
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "700px",
            height: "auto",
            border: "solid black 3px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ textAlign: "center", fontFamily: "math" }}>
            Wikipida Data
          </h1>
          <h3
            style={{
              display: "block",
              textAlign: "center",
              fontFamily: "math",
            }}
          >
          </h3>
          <h3 style={{ textAlign: "center", fontFamily: "math" }}>snippet</h3>
          <span
            style={{
              fontFamily: "monospace",
              display: "block",
              fontSize: "15PX",
              textAlign: "center",
            }}
          >
            {" "}
            {query.new_gmrkb_concept_page}
          </span>
        </div>
      </main>
    </div>
  );
}

export default WikipidiaData;
