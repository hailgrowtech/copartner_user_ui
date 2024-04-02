import React from "react";
<<<<<<< HEAD
import { Expertise, Navbar, Subscription } from "./components";
=======
import { Expertise, Hero, Navbar, Subscription, SubscriptionCourseDetail } from "./components";
>>>>>>> Subscription_ui
import styles from "./style";
import { ErrorPage } from "./components";
import Hero from "./components/Home/Hero";
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
                  <Hero/>
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
                  <Subscription/>
                </div>
              </div>
            }
          />
          <Route
            path="subscription/course"
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <SubscriptionCourseDetail />
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
