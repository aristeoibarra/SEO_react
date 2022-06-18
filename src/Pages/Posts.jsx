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
        <meta name="image" content="https://seo.telloim.com/react.png" />
        <link rel="canonical" href="https://seo.telloim.com" />

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://seo.telloim.com/posts/"></meta>
        <meta property="og:title" content="Posts - React"></meta>
        <meta property="og:description" content="Posts - description"></meta>
        <meta
          property="og:image"
          content="https://seo.telloim.com/react.png"
        ></meta>

        <meta property="twitter:card" content="this is a twitter card"></meta>
        <meta
          property="twitter:url"
          content="https://seo.telloim.com/posts/"
        ></meta>
        <meta
          property="twitter:description"
          content="Posts - description"
        ></meta>
        <meta
          property="twitter:image"
          content="https://seo.telloim.com/react.png"
        ></meta>
      </Helmet>

      <h1>Posts</h1>
    </div>
  );
}
