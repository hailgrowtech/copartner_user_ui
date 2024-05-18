import React from "react";
import {
  Expertise,
  Navbar,
  Subscription,
  SubscriptionRA,
  Wallet,
  Webinar,
  ErrorPage,
  ExpertiseExplore,
  // CoursesExplore,
  SubscriptionBuy,
  ReferEarn,
  Blog,
  BlogPage,
  ContactUs,
  Profile,
  About,
  FAQs,
  PrivacyPolicy,
  Terms,
  SignUp,
  Disclaimer,
  RefundPolicy,
  Hero,
} from "./components";
import styles from "./style";
import "react-toastify/dist/ReactToastify.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { UserDataProvider } from "./constants/context";

function App() {
  const token = sessionStorage.getItem("token");
  const hasVisitedSignUp = sessionStorage.getItem("visitedSignUp");
  const userId = sessionStorage.getItem("userId");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
          <Route
            path=""
            element={
              token || hasVisitedSignUp ? (
                <div className={`${styles.flexStart}`}>
                  <UserDataProvider>
                    <div className={`${styles.boxWidth}`}>
                      <Hero />
                    </div>
                  </UserDataProvider>
                </div>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="expertise"
            element={
              token || hasVisitedSignUp ? (
                <div className={`${styles.flexStart}`}>
                  <UserDataProvider>
                    <div className={`${styles.boxWidth}`}>
                      <Expertise />
                    </div>
                  </UserDataProvider>
                </div>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="subscription"
            element={
              token || hasVisitedSignUp ? (
                <div className={`${styles.flexStart}`}>
                  <UserDataProvider>
                    <div className={`${styles.boxWidth}`}>
                      <Subscription userId={userId} />
                    </div>
                  </UserDataProvider>
                </div>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          {/* <Route
            path="subscription/course"
            element={
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <SubscriptionCourseDetail />
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          /> */}
          <Route
            path="blogs"
            element={
              token || hasVisitedSignUp ? (
                <div className={`${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Blog />
                  </div>
                </div>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="webinar"
            element={
              token || hasVisitedSignUp ? (
                <Webinar />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="history"
            element={
              token || hasVisitedSignUp ? (
                <UserDataProvider>
                  <Wallet />
                </UserDataProvider>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="ra-detail/:id"
            element={
              token ? (
                <SubscriptionRA />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="subscription/buy"
            element={
              token || hasVisitedSignUp ? (
                <SubscriptionBuy />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="expertise/explore-expertise"
            element={
              token || hasVisitedSignUp ? (
                <ExpertiseExplore />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          {/* <Route
            path="courses/explore-courses"
            element={
              token || hasVisitedSignUp ? (
                <CoursesExplore />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          /> */}
          <Route path="/subscriptionRA/:id" element={<SubscriptionRA />} />
          <Route path="subscription/buy/:id" element={<SubscriptionBuy />} />
          <Route
            path="refer&earn"
            element={
              token || hasVisitedSignUp ? (
                <div className={`${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <ReferEarn />
                  </div>
                </div>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="refund-policy"
            element={
              token || hasVisitedSignUp ? (
                <RefundPolicy />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="about"
            element={
              token || hasVisitedSignUp ? (
                <About />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="faqs"
            element={
              token || hasVisitedSignUp ? (
                <FAQs />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="privacy"
            element={
              token || hasVisitedSignUp ? (
                <PrivacyPolicy />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="terms_of_service"
            element={
              token || hasVisitedSignUp ? (
                <Terms />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="profile"
            element={
              token ? (
                <Profile userId={userId} />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="blogs"
            element={
              token || hasVisitedSignUp ? (
                <Blog />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="contact_us"
            element={
              token || hasVisitedSignUp ? (
                <ContactUs />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="disclaimer"
            element={
              token || hasVisitedSignUp ? (
                <Disclaimer />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="/blogs/:blogId"
            element={
              token || hasVisitedSignUp ? (
                <BlogPage />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
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
