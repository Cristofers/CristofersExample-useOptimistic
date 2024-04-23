"use client";

import React from "react";
import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <Link href="./rick-and-morty-example">
        <button className="block m-4 box-border p-4 border rounded-sm shadow-sm">
          Rick and Morty Example
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
