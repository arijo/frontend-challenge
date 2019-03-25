## Setup

1. npm install
2. npm start
3. http://localhost:8080

## Tests

npm test

(see Notes bellow)

## Architecture

1. Home

1.1 SearchBar

1.2 SearchResults

1.2.1 MovieRow

1.2.1.1 MovieCard

1.3 EmptySearch

2. Movie

2.1 MovieDetails

## Notes

For CSS organization I choose to use a CSS modules approach (using webpack to compile the scss files). It was the first time I worked with CSS modules together with React - I was under the impression that maybe picking an alternative CSS organization like BEM or ITCSS might have been less time consuming and made it easier to organize all the styles for this demo application.

Unfortunately I did not have much time to invest on the unit tests - it took me some time so setup the Jest framework together with webpack but I was not able to take advantage of it since I invested the available time on making sure the application design was as polished as possible.

I used Redux for state management - since I was in a rush to deliver my solution I didn't really investigate better ways to organize state with React though that is surely somehting I will invest my time on since it seems to me that React makes it unecessarely more complicated to manage state compared to alternative frameworks or even a custom javascript solution.

Thank you for giving me the oportunity to work on this code challenge please do not hesitate to email me with any question you might want to ask me.

alexandre.rijo@gmail.com




