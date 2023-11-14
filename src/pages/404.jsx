import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full px-4">
      <h1 className="text-4xl">404 Error</h1>
      <p className="text-lg">
        Sorry. We can't seem to find the page you're looking for.
      </p>
    </div>
  );
}

export default NotFoundPage;
