# Development

### Link to Deployed Website

https://amex2mmuqtpvpnxv.github.io/Royal-Road

### Goal and Value of the Application

The application is a sample clone of a website called RoyalRoad.com.
The original website is a website that allows users to upload and read stories. In this clone a few popular works are listed and you are able to sort, filter and bookmark them.

All content on this sample is from the website and owned by the authors of the respective works. Each author is listed on the card.

### Usability Principles Considered

One important usability principle incorporated into this project is simplicity. The app has a very simple function and as such the content is also layed out in a simple and straightforward manner. There are a list of cards that the viewer can view. Each card has a bookmark button, which adds the story to a favorites list. Lastly, on the left the user can sort and filter the stories to help them more easily find what they are looking for.

The design is consistent as well. Each card is layed out the same way so that the user knows what to expect.

Lastly the most important elements of the page are clearly communicated on the front of the card. The story cover takes up a large part of the card making it stand out. And the title is in bold to emphasize its importance. On the back of the card there is a description of the story. The only two other elements on the back of the card are the title and image which don't detract any attention from the description, allowing the user to fully focus on it, but also serve as a fallback so that the user does not need to flip the card back over in order to remember what story they are reading about.

### Organization of Components

Here are a list of components used:

Card, CardFront, CardBack, Filter, Sort, Stories

The layout is relatively straight forward. The Stories component renders a list of card components. Each card component is comprised of a CardFront component and a CardBack component. Lastly the Sort and Filter components are used in App.js to allow for sorting and filtering. A Stories component is also rendered in App.js.

### How Data is Passed Down Through Components

All data stored in the json element is passed down from stories into each respective card component. Afterwards only the data needed by the CardFront and CardBack components are passed down to these components from the Card component.

More specifically, for the CardFront that ends up being everything but the description, and for CardBack only the title, img and description properties are handed down.

Note: A onclick function is passed into the front and back components to allow the card to flip as well

### How the User Triggers State Changes

The user triggers state changes by clicking the card to flip it over, clicking the bookmark button to bookmark a story, selecting an attribute to sort by, and selecting filters to narrow down the types of stories they would like to see.
