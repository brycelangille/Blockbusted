import React from 'react'
import "./Header.css";
import SearchPage from "../Search/SearchPage.jsx";

export default function () {
  return (
    <div className="header">
      <h1>Bryce's IMDB Project</h1>
      <SearchPage />
    </div>
  )
}