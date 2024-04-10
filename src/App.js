import React from "react";
import { ContactUs, Expertise, Navbar, Subscription, SubscriptionCourseDetail, SubscriptionRA, Wallet, Webinar, Profile, Blog, BlogPage } from "./components"; // Import the Profile component, ContactUs component
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
          <Route
            path="blogs"
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Blog/>
                </div>
              </div>
            }
          />
          <Route path="webinar" element={<Webinar />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="subscription/ra-detail" element={<SubscriptionRA />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
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
