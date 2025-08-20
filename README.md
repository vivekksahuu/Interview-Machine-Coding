---

# Movie App

A simple movie browsing app built using **React (JavaScript)** with **Vite**. Browse movies, view details, cast, and search for your favorite titles.

## Features

- Browse popular movies with detailed information
- Search movies by title
- View cast for individual movies
- Pagination for search results
- Styled layout using Tailwind CSS

## Tech Stack

- **React** (JS variant)
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **TanStack Query** for API fetching
- **React Paginate** for pagination

## Setup

Follow these steps to get the project running locally:

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

## Folder Structure

```
src/
 ├─ hooks/               # custom hooks
 ├─ pages/               # Page-level components (Popular, Top Rated, Upcoming, Indivual, )
 ├─ shared_components/   # Common components like Skeleton, MovieCard, PosterInfo
 └─ App.jsx              # Main App entry
```
