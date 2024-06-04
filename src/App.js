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
  // RefundPolicy,
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
import { UserProvider } from "./constants/userContext";
import { SubscriptionProvider } from "./constants/subscriptionContext";
import Ad1 from "./components/LandingPages/Ad1";

function App() {
  // const token = sessionStorage.getItem("token");
  const hasVisitedSignUp = sessionStorage.getItem("visitedSignUp");
  const userId = localStorage.getItem("userId");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <UserProvider>
              <Navbar token={userId} />
            </UserProvider>
          }
          errorElement={<ErrorPage />}
        >
          <Route
            path=""
            element={
              // userId || hasVisitedSignUp ? (
              <div className={`${styles.flexStart}`}>
                <UserDataProvider>
                  <div className={`${styles.boxWidth}`}>
                    <SubscriptionProvider>
                      <Hero
                        hasVisitedSignUp={hasVisitedSignUp}
                        token={userId}
                      />
                    </SubscriptionProvider>
                  </div>
                </UserDataProvider>
              </div>
              // ) : (
              //   <Navigate to="/signup" replace={true} />
              // )
            }
          />
          <Route
            path="ad1"
            element={
              // userId || hasVisitedSignUp ? (
              <div className={`${styles.flexStart}`}>
                <UserDataProvider>
                  <div className={`${styles.boxWidth}`}>
                    <Ad1 hasVisitedSignUp={hasVisitedSignUp} token={userId} />
                  </div>
                </UserDataProvider>
              </div>
              // ) : (
              //   <Navigate to="/signup" replace={true} />
              // )
            }
          />
          <Route
            path="expertise"
            element={
              userId ? (
                <div className={`${styles.flexStart}`}>
                  <UserDataProvider>
                    <div className={`${styles.boxWidth}`}>
                      <Expertise token={userId} />
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
              userId ? (
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
              userId || hasVisitedSignUp ? (
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
              userId || hasVisitedSignUp ? (
                <Webinar />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="history"
            element={
              userId ? (
                <UserDataProvider>
                  <SubscriptionProvider>
                    <Wallet userId={userId} />
                  </SubscriptionProvider>
                </UserDataProvider>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="ra-detail/:id"
            element={
              <UserProvider>
                <SubscriptionRA userId={userId} />
              </UserProvider>
            }
          />
          <Route
            path="subscription/buy"
            element={
              userId || hasVisitedSignUp ? (
                <SubscriptionBuy />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="expertise/explore-expertise"
            element={
              userId || hasVisitedSignUp ? (
                <UserDataProvider>
                  <ExpertiseExplore token={userId} />
                </UserDataProvider>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          {/* <Route
            path="courses/explore-courses"
            element={
              userId || hasVisitedSignUp ? (
                <CoursesExplore />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          /> */}
          <Route path="subscription/buy/:id" element={<SubscriptionBuy />} />
          <Route
            path="refer&earn"
            element={
              userId || hasVisitedSignUp ? (
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
          {/* <Route
            path="refund-policy"
            element={
              userId || hasVisitedSignUp ? (
                <RefundPolicy />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          /> */}
          <Route
            path="about"
            element={
              userId || hasVisitedSignUp ? (
                <About />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="faqs"
            element={
              userId || hasVisitedSignUp ? (
                <FAQs />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="privacy"
            element={
              userId || hasVisitedSignUp ? (
                <PrivacyPolicy />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="terms_of_service"
            element={
              userId || hasVisitedSignUp ? (
                <Terms />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="profile"
            element={
              userId ? (
                <UserProvider>
                  <Profile userId={userId} />
                </UserProvider>
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="blogs"
            element={
              userId || hasVisitedSignUp ? (
                <Blog />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="contact_us"
            element={
              userId || hasVisitedSignUp ? (
                <ContactUs />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="disclaimer"
            element={
              userId || hasVisitedSignUp ? (
                <Disclaimer />
              ) : (
                <Navigate to="/signup" replace={true} />
              )
            }
          />
          <Route
            path="/blogs/:blogId"
            element={
              userId || hasVisitedSignUp ? (
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
