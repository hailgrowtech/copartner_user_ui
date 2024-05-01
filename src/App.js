import React, { useEffect, useState } from "react";
import { Expertise, Navbar, Subscription, SubscriptionCourseDetail, SubscriptionRA, Wallet, Webinar, ErrorPage, ExpertiseExplore, CoursesExplore, SubscriptionBuy, ReferEarn, Blog, BlogPage, ContactUs, Profile  } from "./components";
import styles from "./style";
import Hero from "./components/Home/Hero";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
import About from "./components/About/About";
import FAQs from "./components/About/FAQs";
import PrivacyPolicy from "./components/About/PrivacyPolicy";
import Terms from "./components/About/Terms";
import SignUp from "./components/SignUp";
import Otp from "./components/Otp";


function App() {

  const token = localStorage.getItem("token");
  const hasVisitedSignUp = sessionStorage.getItem("visitedSignUp");

  // useEffect(() => {
    // if (!hasVisitedSignUp) {
    //   window.location.reload();
    // }
  // }, [hasVisitedSignUp])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
          <Route path="" element={ token || hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero/>
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="expertise" element={ token || hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Expertise />
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="subscription" element={ token || hasVisitedSignUp ?
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Subscription/>
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
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
          <Route path="blogs" element={ token || hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Blog/>
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="webinar" element={ token || hasVisitedSignUp ? <Webinar /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="history" element={ token || hasVisitedSignUp ? <Wallet /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="subscription/ra-detail" element={ token || hasVisitedSignUp ? <SubscriptionRA /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="subscription/buy" element={ token || hasVisitedSignUp ? <SubscriptionBuy /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="expertise/explore-expertise" element={ token || hasVisitedSignUp ? <ExpertiseExplore /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="courses/explore-courses" element={ token || hasVisitedSignUp ? <CoursesExplore /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="refer&earn" element={ token || hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <ReferEarn />
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="about" element={ token || hasVisitedSignUp ? <About /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="faqs" element={ token || hasVisitedSignUp ? <FAQs /> : <Navigate to="/signup" replace={true}/>} />
          <Route path='privacy' element={ token || hasVisitedSignUp ? <PrivacyPolicy /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="terms_of_service" element={ token || hasVisitedSignUp ? <Terms /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="profile" element={ token || hasVisitedSignUp ? <Profile /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="blogs" element={ token || hasVisitedSignUp ? <Blog /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="contact_us" element={ token || hasVisitedSignUp ? <ContactUs /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="/blogs/:blogId" element={ token || hasVisitedSignUp ? <BlogPage /> : <Navigate to="/signup" replace={true}/>} />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/otp" element={ <Otp/>} />
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
