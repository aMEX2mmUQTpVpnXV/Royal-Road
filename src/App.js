import "./App.css";
import Stories from "./components/Stories";
import Sort from "./components/Sort";
import CategoryFilter, { WarningFilter } from "./components/Filter";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [sortingMetric, setSortingMetric] = useState("Title");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [warningFilters, setWarningFilters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  function sort(a, b) {
    if (sortingMetric === "Title") {
      return a.title.toString().localeCompare(b.title.toString());
    }
    if (sortingMetric === "Chapters") {
      return a.chapters - b.chapters;
    }
    if (sortingMetric === "Followers") {
      return a.followers - b.followers;
    }
  }

  function categoryFilter(story) {
    if (categoryFilter.length === 0) return true;
    return categoryFilters.every((category) =>
      story.categories.includes(category)
    );
  }
  function warningFilter(story) {
    if (categoryFilter.length === 0) return true;
    return warningFilters.every((category) =>
      story.warnings.includes(category)
    );
  }

  const handleSortChange = (event) => {
    setSortingMetric(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    if (!categoryFilters.includes(event.target.value)) {
      setCategoryFilters([...categoryFilters, event.target.value]);
    } else {
      setCategoryFilters(
        categoryFilters.filter((category) => category !== event.target.value)
      );
    }
  };

  const handleWarningFilterChange = (event) => {
    if (!warningFilters.includes(event.target.value)) {
      setWarningFilters([...warningFilters, event.target.value]);
    } else {
      setWarningFilters(
        warningFilters.filter((warning) => warning !== event.target.value)
      );
    }
  };

  const handleBookmarkChange = (story, flag, setFlag) => {
    if (!bookmarks.find((cur) => cur.title === story.title)) {
      setBookmarks([...bookmarks, story]);
      setFlag(true);
    } else {
      setBookmarks(bookmarks.filter((cur) => cur.title !== story.title));
      setFlag(false);
    }
  };

  function clear() {
    setCategoryFilters([]);
    setWarningFilters([]);
    setSortingMetric("Title");
    setBookmarks([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Royal Road</h1>
        <p className="caption">
          Note: All ratings are my objectively correct opinion.
        </p>
      </header>
      <div className="split-container">
        <div className="split-left">
          <div className="split-left-container">
            <h2 style={{ marginTop: "40px" }}>Sort By</h2>
            <Sort
              sortingMetric={sortingMetric}
              onChange={handleSortChange}
            ></Sort>
            <h2>Categories</h2>
            <CategoryFilter
              onChange={handleCategoryFilterChange}
              categoryFilters={categoryFilters}
            ></CategoryFilter>
            <h2>Sensitive</h2>
            <WarningFilter
              onChange={handleWarningFilterChange}
              warningFilters={warningFilters}
            ></WarningFilter>
            <h2>Favorites</h2>
            {bookmarks
              .sort((a, b) =>
                a.title.toString().localeCompare(b.title.toString())
              )
              .map((story, i) => (
                <div key={i}>{story.title}</div>
              ))}
            {bookmarks.length > 0 && (
              <p className="aggregator">
                Total Chapters:{" "}
                {bookmarks.reduce((total, cur) => total + cur.chapters, 0)}
              </p>
            )}
            {bookmarks.length === 0 && <p>Empty</p>}
            <Button onClick={clear} className="button">
              Clear All
            </Button>{" "}
          </div>
        </div>
        <div className="split-right">
          <Stories
            sort={sort}
            filters={[categoryFilter, warningFilter]}
            handleBookmarkChange={handleBookmarkChange}
            bookmarks={bookmarks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
