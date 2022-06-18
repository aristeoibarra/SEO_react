import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Posts() {
  return (
    <div>
      <HelmetProvider>
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
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </HelmetProvider>

      <h1>Posts</h1>
    </div>
  );
}
