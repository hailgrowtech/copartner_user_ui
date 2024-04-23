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

  const hasVisitedSignUp = localStorage.getItem("visitedSignUp");

  // useEffect(() => {
    // if (!hasVisitedSignUp) {
    //   window.location.reload();
    // }
  // }, [hasVisitedSignUp])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
          <Route path="" element={ hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero/>
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="expertise" element={ hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Expertise />
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="subscription" element={ hasVisitedSignUp ?
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
          <Route path="blogs" element={ hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Blog/>
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="webinar" element={ hasVisitedSignUp ? <Webinar /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="history" element={ hasVisitedSignUp ? <Wallet /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="subscription/ra-detail" element={ hasVisitedSignUp ? <SubscriptionRA /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="subscription/buy" element={ hasVisitedSignUp ? <SubscriptionBuy /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="expertise/explore-expertise" element={ hasVisitedSignUp ? <ExpertiseExplore /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="courses/explore-courses" element={ hasVisitedSignUp ? <CoursesExplore /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="refer&earn" element={ hasVisitedSignUp ? 
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <ReferEarn />
                </div>
              </div> : <Navigate to="/signup" replace={true}/>
            }
          />
          <Route path="about" element={ hasVisitedSignUp ? <About /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="faqs" element={ hasVisitedSignUp ? <FAQs /> : <Navigate to="/signup" replace={true}/>} />
          <Route path='privacy' element={ hasVisitedSignUp ? <PrivacyPolicy /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="terms_of_service" element={ hasVisitedSignUp ? <Terms /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="profile" element={ hasVisitedSignUp ? <Profile /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="blogs" element={ hasVisitedSignUp ? <Blog /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="contact_us" element={ hasVisitedSignUp ? <ContactUs /> : <Navigate to="/signup" replace={true}/>} />
          <Route path="/blogs/:blogId" element={ hasVisitedSignUp ? <BlogPage /> : <Navigate to="/signup" replace={true}/>} />
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
