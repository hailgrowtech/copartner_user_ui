import React from "react";
import { Expertise, Navbar, Subscription, SubscriptionCourseDetail, SubscriptionRA, Wallet, Webinar, ErrorPage, ExpertiseExplore  } from "./components";
import styles from "./style";
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
          <Route path="expertise" element={ <Expertise /> } />
          <Route path="webinar" element={<Webinar />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="subscription/ra-detail" element={<SubscriptionRA />} />
          <Route path="expertise/explore-expertise" element={<ExpertiseExplore />} />
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
