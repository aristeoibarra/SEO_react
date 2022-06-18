import React from "react";

import { Helmet } from "react-helmet";

export default function Posts() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Posts - React</title>
        <meta name="title" property="og:title" content="Posts - React"></meta>
        <meta
          name="description"
          property="og:description"
          content="Posts - description"
        ></meta>
        <meta name="author" content="React" />
        <link rel="canonical" href="https://seo.telloim.com" />
      </Helmet>

      <h1>Posts</h1>
    </div>
  );
}
