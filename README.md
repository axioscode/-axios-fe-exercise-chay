# Axios Front End Excerise

Axios has a lot of award-winning journalism, and sometimes it doesn't all fit on one page, so we have to help readers easily find and read the stories they want. One of the ways we can do that is with a [Carousel](http://ui-patterns.com/patterns/Carousel), a user interface pattern that allows users to navigate between various stories while displaying a simple overview for each.

Our design team has supplied the following design for a Carousel. Your task is to build it.

https://www.figma.com/file/UpnImtkeDJSr21eFjxAoLN/Exercise---Horizontal-Scroll?node-id=0%3A1

Feel free to use any font family you desire (you are not required to use `NB International Pro` as in the Figma design), but may we suggest [Roboto](https://fonts.google.com/specimen/Roboto), which matches closely to Axios' style.

We've set up the skeleton of an application for you in [NextJS](https://nextjs.org) with [Styled Components](https://styled-components.com), but there's still plenty of decisions to make.

## How to submit your solution
When you have finished, please submit your solution back to the Github repository we have shared out with you. You do not need to fork the assignment repository or send us a copy. Please reach out to the recruiting coordinator to let them know once you have completed the final version of the exercise.

## Before you start

We're not trying to get you to work for us for free, so please don't spend more than 1/2 day on this. This is not a hard requirement, so if you want to add some extra polish, go for it. But seriously. We already have a Carousel component. 😉

If you can't get to a certain part of the exercise, add it to a `TODO` doc that explains how you'd complete it.

## Getting started

1. In index.html, rebuild the mocks in the Figma design in semantic HTML, CSS and JS.
1. First make a call to the `stream endpoint` to retrieve an array of the 10 lastest story ids for Axios.com.
1. For each story id, make another call to the `content endpoint` to retrieve the data for each story.
1. For each slide in the carousel, display the following:
- The `headline` of the story.
- The `display name` of the author (note that this text is deliberately left out of the Figma design, so we leave it to you to make your own stylistic choice for its placement).
- The `section` label of the story.
- The `primary_image` of the story.
- The `published date` of the story.
- Link out the cover image and `Go Deeper` using the `permalink` returned by the API.

These are the endpoints you'll need to populate your Carousel:

### Stream endpoint

https://api.axios.com/api/render/stream/content

This returns the UUIDs of about 10 stories.

### Content endpoint

https://api.axios.com/api/render/content/c13dbda5-893d-46ba-ae6a-87ff8e34c74e

This returns the content and detail of one story, from its UUID.

## Details

- When landing on the page, the first story should be visible.
- When clicking through the Carousel, the headline, cover image, display name, and published date should all change.
- Clicking on an item in the Carousel should open that story on axios.com in a new tab.
- The `Visit axios.com` button should link to [https://www.axios.com](https://www.axios.com).

## Suggestions

- We're big fans of HTML5 semantic elements.

- You are not required to build the Carousel component from scratch, so go ahead and select a third-party library of your own choosing. We may have follow-up questions for you about the choice and how you used the library.

- We prefer tend to prefer functional components over classes, and [hooks](https://reactjs.org/docs/hooks-intro.html) where necessary.

- You can use any data fetching library you like. [Fetch](https://github.com/matthew-andrews/isomorphic-fetch), [Axios](https://github.com/axios/axios) (heh) or [SWR](https://github.com/vercel/swr) will all do just fine.

- We care about accessibility. Please make your page as accessible as possible.

- There are layouts for a smaller screen and a larger screen. We'd love to see a responsive page that works for both. The minimum width of the screen is 375px. The horizontal breakpoint is at 980px.

- Building software is a collaborative process, so if you're feeling adventurous, feel free to diverge from the designs somewhat and apply your own creativity. Let us know about the choices you made, and why.

- The application has [Jest](https://jestjs.io) already set up. Add the amount of test coverage you feel is appropriate.

- We use TypeScript at Axios. Bonus points if you define types and use them effectively to increase the reliability of your code.

## Support

If you have any questions about the exercise, feel free to [email us](mailto:em-support@axios.com).
