import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>App</h1>
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
