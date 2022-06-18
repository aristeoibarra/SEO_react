import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <h1>App-test</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
}
