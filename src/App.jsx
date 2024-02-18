import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, lazy } from "react";
const GroceryList = lazy(() => import("./components/grocery-list/GroceryList"));
const LandingPage = lazy(() => import("./components/LandingPage/LandingPage"));
const TicTacToe = lazy(() => import("./components/TicTacToe/assets/TicTacToe"));
import "./App.css";
import MobileNav from "./components/Navbar/MobileNav";

function App() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <LandingPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/grocery"
          element={
            <Suspense>
              <GroceryList />
            </Suspense>
          }
        ></Route>
        <Route
          path="/tictactoe"
          element={
            <Suspense>
              <TicTacToe />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
