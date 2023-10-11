# MERN Stack Movie Watchlist Project

This MERN (MongoDB, Express.js, React, Node.js) stack project allows users to create a movie watchlist where they can add movies from IMDB and store relevant details. The project includes both frontend and backend components.

## Project Structure

The project directory is structured as follows:

- `frontend/`: Includes the React frontend.
- `backend/`: Includes the Express.js, API Routes, and MongoDB cloud server on the backend.

# Backend Setup for MERN Stack Movie Watchlist Project

This section covers the backend setup of the MERN (MongoDB, Express.js, React, Node.js) stack movie watchlist project. We'll go through the .env file, index.js file, and MovieModel.js file, explaining their roles and functionalities.

## .env File

The .env file contains sensitive configuration information and API keys required for the backend to function. It stores two critical pieces of data:

- **CONNECTION_STRING (MongoDB Atlas):**
  - [MongoDB Atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F65255cb8cc05f81d29c87263%23%2Fmetrics%2FreplicaSet%2F65255d431bbf4b13a5ea07a6%2Fexplorer%2Ftest) where movie information is stored.
  - Example: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority`
    ![Screenshot (708)](https://github.com/Tanvi-Chaudhari/Movie-Watchlist-using-MERN/assets/75910333/3d308aa7-cb9c-47d9-a8bd-82e1d26d5e2c)


- **TOKEN (The Movie Database):**
  - An API key for authenticating requests to [The Movie Database](https://www.themoviedb.org/) (TMDB) API.
  - Example: `API_KEY_FROM_TMDB`
    ![Screenshot (714)](https://github.com/Tanvi-Chaudhari/Movie-Watchlist-using-MERN/assets/75910333/c49f8eb3-c52e-47ef-854d-5ff2052dcf0a)

## index.js File

The `index.js` file is the main entry point for the backend, responsible for defining and handling all API endpoints.

- **Port:**
  - The backend runs on port 3010 (`const PORT = 3010;`), allowing communication between the frontend and backend.

- **API Endpoint: `/addMovie`**
  - This endpoint handles POST requests for adding a movie to the watchlist.
  - It fetches movie information from TMDB using the IMDB ID (e.g., [tt0133093](https://www.imdb.com/title/tt0133093/?ref_=chttp_t_16).
    ![Screenshot (704)](https://github.com/Tanvi-Chaudhari/Movie-Watchlist-using-MERN/assets/75910333/ddd072ae-546b-48ba-a8dc-1582e77857ae)

 

- **Processing the Movie Information:**
  - The endpoint processes the request body to extract the IMDB ID, platform, and watch date.
  - It uses the IMDB ID to fetch movie data from TMDB and prints the movie's title in the console.

- **Error Handling:**
  - Proper error handling is implemented to handle missing required information and movie not found scenarios.

- **Adding Movie to MongoDB:**
  - If the movie is found, it creates a new movie object and saves it to the MongoDB database.

## MovieModel.js File

The `MovieModel.js` file defines the Mongoose schema for the movie watchlist.

- **Schema:**
  - A Mongoose schema named 'test' is defined, representing the 'movies' table in the MongoDB Atlas database.

- **Schema Fields:**
  - The schema includes fields like movieName, platform, watchDate, overview, and poster_path.

## Usage

1. **Sending a POST Request to Add a Movie:**
   - Using a tool like POSTMAN, send a POST request to `http://localhost:3010/addMovie`.
   - The request body should include the IMDB ID, platform, and watch date.
   ![Screenshot (706)](https://github.com/Tanvi-Chaudhari/Movie-Watchlist-using-MERN/assets/75910333/585242ec-3e0e-4ae9-8edf-cad1bd4450ac)

2. **Accessing the MongoDB Cloud Database:**
   - Movie information is stored in a MongoDB Cloud database under the 'test' database and 'movies' collection. As you can see in the above image of MongoDB Cloud website.
  
This backend setup, the .env file, the main index.js file, and the Mongoose schema in detail, providing a clear understanding of the backend structure and functionality for the MERN Stack Movie Watchlist Project.

# Frontend Setup for MERN Stack Movie Watchlist Project

This section provides an overview of the frontend setup for the MERN (MongoDB, Express.js, React, Node.js) stack movie watchlist project. We'll discuss the React components and their functionalities.

## React Components

The frontend of the project consists of the following React components:

### `SubmissionForm.jsx`

This component renders a submission form at the top of the website, allowing users to add a movie to the watchlist.

- **Form Fields:**
  - IMDB ID (`movieID`)
  - Platform (`moviePlatform`)
  - Watch Date (`watchDate`)

- **Form Submission:**
  - Upon clicking the "ADD MOVIE" button, the form triggers a function to handle form submission.
  - It validates the form fields and alerts the user if any field is missing.
  - If all fields are filled, it calls the `addMovie` function, passing the movie details.

### `MovieCard.jsx`

This component represents a movie card, displaying movie information, including movie name, platform, overview, and a delete button.

- **Movie Information:**
  - Movie Name (`movieName`)
  - Poster Path (`poster_path`)
  - Overview (`overview`)
  - Platform (`platform`)

- **Platform Colors:**
  - Each movie card's background color is based on the platform (Netflix: Red, Hulu: Green, Disney+: Blue, Amazon Prime: Black).

- **Delete Movie:**
  - Clicking the "DELETE MOVIE" button triggers a function to delete the movie from the watchlist.

### `App.js`

This is the main component that orchestrates the interaction between other components.

- **State Management:**
  - Manages the state using `useState` hook, including movie cards (`cards`).

- **Fetching Movies:**
  - Uses `useEffect` to fetch movies from the backend upon component mount.

- **Adding Movies:**
  - Implements the `addMovie` function to send a POST request to the backend to add a movie to the watchlist.

 # Install Dependencies

Navigate to the `frontend/` and `backend/` directories and run:

## Run the Backend

Navigate to the `backend/` directory and run:

```bash
npm start
```

## Run the Backend

Navigate to the `frontend/` directory and run:

```bash
npm start
```
## Access the Application

Open your browser and go to http://localhost:3000 to access the application.

Here, how it looks like:
![Screenshot (713)](https://github.com/Tanvi-Chaudhari/Movie-Watchlist-using-MERN/assets/75910333/3160fe53-e692-4929-9b1f-b04b01647b8e)


## References
[Build a Watchlist Using the MERN Stack | React, TMDB API, Express, MongoDB Tutorial (2023)](https://www.youtube.com/watch?v=oSVEpH2KX5I)

