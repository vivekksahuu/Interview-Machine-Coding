import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import IndividualMovieDetail from "./pages/Individual/Individual";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="popular" element={<Home />} />
        <Route path="movie/:id" element={<IndividualMovieDetail />} />
        <Route path="toprated" element={<TopRated />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
