import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />

          {/* Here we will mount our modal portal */}
          <div id="modal" />

          <NextScript />
        </body>
      </Html>
    );
  }
}
