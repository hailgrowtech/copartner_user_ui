import React from "react";
import { Expertise, Navbar, Subscription, SubscriptionCourseDetail, SubscriptionRA, Wallet, Webinar, ErrorPage, ExpertiseExplore, CoursesExplore  } from "./components";
import styles from "./style";
import Hero from "./components/Home/Hero";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/About/About";

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
          <Route path="courses/explore-courses" element={<CoursesExplore />} />
          <Route
            path="refer&earn"
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <ReferEarn />
                </div>
              </div>
            }
          />
          <Route path="about" element={<About />} />
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
