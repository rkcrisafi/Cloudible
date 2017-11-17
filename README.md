# Cloudible

[Cloudible live](http://cloudible.herokuapp.com/#/)

Cloudible is a full-stack web application, a clone of Audible. On the backend it's built on Ruby on Rails and, on the frontend, on React and Redux.  


## Features & Implementation

### Audio

![Audio](http://cloudible.herokuapp.com/#/)

Audios can be played on the landing page and book show page. The listeners can play/pause the samples of the books by clicking the play/pause icons. There's only one source of audio on the book index page and every time user clicks on a new one, the source attribute corresponds to the new `audioId`. This also prevents users from playing multiple books simultaneously.

### Book Carousel

![Carousel example](http://cloudible.herokuapp.com/#/books)

The book index page contains two types of carousels. To build those, the React-Slick library was installed and modified significantly. The original carousel has an overflow hidden property which was hiding the book description dropdown. Also, depending on the position of the book the user hovers, the description pops out on the left or right side of the book.


### Search

The search results are populated on the new page. The search looks for the words that are matched in the titles of the books. It's quite rigid and might be modified in the future.


### Single page

Cloudible is a single page application that dynamically updates as the user interacts with the app.


## Future Directions for the Project

The are also ratings and reviews to be implemented in the near future. In addition, the interactive audio player could be added as well.
