import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Please check the URL or go back to the <a href="/">home page</a>.
      </p>
      <img src="/images/404.jpg" alt="Not Found" />
    </div>
  );
}

export default NotFound;
