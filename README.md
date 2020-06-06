
**API:**
1. https://api.themoviedb.org/3/movie/550?api_key=bf343ac25ffad3946e8e0afedf7b3c2f
Api key: bf343ac25ffad3946e8e0afedf7b3c2f
2. Documentation: https://www.themoviedb.org/documentation/api
3. Support forum: https://www.themoviedb.org/talk/category/5047958519c29526b50017d6
4. Wrappers & libraries: https://www.themoviedb.org/documentation/api/wrappers-libraries



**Project Schedule**
Meeting with Jenn: Monday, June 1st, 

|  Day | Deliverable | Status
|---|---| ---|
|June 1| Project Prompt | Incomplete
|June 1-2| Wireframes / Priority Matrix / Timeframes | Incomplete
|June 2| Design Application Structure  (CSS) | Incomplete
|June 2| React/API coding | Incomplete
|June 3-4| Debugging and completing coding from June2-3rd  | Incomplete
|June 3-4| Create Testing/Scorebaording on June2-3rd  | Incomplete
|June 4| MVP/Post MVP checklist completion | Incomplete
|June 5| Present to the Class| Incomplete
  
  
**Priority Matrix**
https://imgur.com/gallery/TJPrjmb

Try number two

**BlockBusted**

**Overview/Description:** During a Quarentine everyone needs a something new to watch on televesion. It is a good time to spend with family, friends, or someone close. To distract you from the world's current situation this React, movie project to be able to search movei, tv, and series at a click of a button. Thank you for you tuning in. 




<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.
1. https://imgur.com/gallery/OvdgPsg (Desktop)
2. https://imgur.com/gallery/q2J2mxN (Mobile)
3. https://imgur.com/gallery/TNTogZY (Tablet)



<br>

### MVP

1. Structed material in organized and dry (personal goal i look forward to completing)
2. Recieve data endpoints. Display data as an ingaging way for users. (API goal)
3. Add CSS to make it fun/engaging (looking into animation and detailing the show component) 
4. Search component is ingaging for users ( making sure the data renders and displays in a way that would be marketable to an audience)
5. Getting testing to work for my project ( implementing a skill that i need to work on)
6. Make app both Landscape and portiot mode for mobile, tablet(css design)


<br>

#### Goals
My goal is to create an application that will share relative information that is similiar to a IMDB page. I wanted to create an application that is scable and easy to add onto in the future giving me more opportunity to be creative and apply React features regularly moving forward. 

|     Day          | Deliverable                                |
| :--------------: | :----------------------------------------- |
|   June 1.        | Project Prompt approval                    |
|   June 1.        |  Have a successful API call with images    |
|   June 2.        |  React and Routing complete                |
|   June 3-4       | CSS completed.                             |
|   June 4.        |  Add secound API    |
|   June 3-4       | Debugging completed.                       |
|   June 5.        | Present                          |



<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Allows me to use router for my app.        |
|   Axios          | Allows me to call an API successfully.     |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| moviedb      |      yes      | themoviedb.org    |     https://api.themoviedb.org/3/movie/550?api_key=bf343ac25ffad3946e8e0afedf7b3c2f   |

```
{
adult: false,
backdrop_path: "/8iVyhmjzUbvAGppkdCZPiyEHSoF.jpg",
belongs_to_collection: null,
budget: 63000000,
genres: [
{
id: 18,
name: "Drama"
}
],
homepage: "http://www.foxmovies.com/movies/fight-club",
id: 550,
imdb_id: "tt0137523",
original_language: "en",
original_title: "Fight Club",
overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
popularity: 34.693,
poster_path: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
production_companies: [
{
id: 508,
logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
name: "Regency Enterprises",
origin_country: "US"
},
{
id: 711,
logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
name: "Fox 2000 Pictures",
origin_country: "US"
},
{
id: 20555,
logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
name: "Taurus Film",
origin_country: "DE"
},
{
id: 54051,
logo_path: null,
name: "Atman Entertainment",
origin_country: ""
},
{
id: 54052,
logo_path: null,
name: "Knickerbocker Films",
origin_country: "US"
},
{
id: 25,
logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
name: "20th Century Fox",
origin_country: "US"
},
{
id: 4700,
logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
name: "The Linson Company",
origin_country: ""
}
],
production_countries: [
{
iso_3166_1: "DE",
name: "Germany"
},
{
iso_3166_1: "US",
name: "United States of America"
}
],
release_date: "1999-10-15",
revenue: 100853753,
runtime: 139,
spoken_languages: [
{
iso_639_1: "en",
name: "English"
}
],
status: "Released",
tagline: "Mischief. Mayhem. Soap.",
title: "Fight Club",
video: false,
vote_average: 8.4,
vote_count: 19286
}
```

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ Movie.jsx
      |__ Search.jsx
      |__ SearchPage.jsx
      |__ Detail.jsx
      |__ App.js
      |__ style.css
      |__ Footer.jsx
```
      
<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    | functional |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    Show      | functional |   y   |   y   | _The show will show info about the characters from the API.      |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header compoent     |    M     |     2 hrs      |      hrs     |      hrs      |
| Call API.           |    H     |     3 hrs      |      hrs     |      TBD      |
| Render images       |    H     |     3 hrs      |      hrs     |      TBD      |
| Create Links        |    H     |     4 hrs      |      hrs     |      TBD      |
| Search/Movie Page   |    H     |     5 hrs      |      hrs      |     TBD      |
| CSS                 |    M     |     5 hrs      |      hrs      |     TBD      |
| Creating Logo       |    H     |     1 hrs      |      hrs      |     TBD      |
| Call Additional info|    H     |     3 hrs      |      hrs     |      TBD      |
|     Debugging       |    H     |     3 hrs      |      hrs      |     TBD      |
| TOTAL               |          |     31 hrs     |     hrs       |      TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions, i.e. generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

**PostMVP**
1. Adding casting, crew, and genre
3. Additional CSS to make players want to engage 
4. Add movie/tv review from rotten tomato or imdb
<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
code snippet here
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if yo