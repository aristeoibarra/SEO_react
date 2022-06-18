import React from "react";
import { Helmet } from "react-helmet";

export default function Posts() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Posts - React</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>Posts</h1>
    </div>
  );
}
