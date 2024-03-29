import React from "react";
import { Expertise, Hero, Navbar, Subscription } from "./components";
import styles from "./style";
import { ErrorPage } from "./components";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
          <Route
            path=""
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>
            }
          />
          <Route
            path="expertise"
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Expertise />
                </div>
              </div>
            }
          />
          <Route
            path="subscription"
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Subscription />
                </div>
              </div>
            }
          />
        </Route>
      </>
    )
  );

  return (
    <div className="bg-[#06030E] w-full overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
