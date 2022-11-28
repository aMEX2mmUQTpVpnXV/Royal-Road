import Card from "./Card";
import "./Stories.css";
import data from "./../data/data.json";

function Stories(props) {
  // Sort and Filter Data
  var processedData = data.sort(props.sort);
  for (let i = 0; i < props.filters.length; i++) {
    processedData = processedData.filter(props.filters[i]);
  }
  // Return processed data in the form of cards
  return (
    <div className="stories-container">
      {processedData.map((story, i) => (
        <Card
          key={i}
          title={story.title}
          desc={story.desc}
          img={story.img}
          rating={story.rating}
          categories={story.categories}
          chapters={story.chapters}
          followers={story.followers}
          warnings={story.warnings}
          author={story.author}
          handleBookmarkChange={props.handleBookmarkChange}
          bookmarks={props.bookmarks}
        ></Card>
      ))}
    </div>
  );
}
export default Stories;
