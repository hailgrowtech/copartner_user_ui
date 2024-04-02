import React from "react";
import { Expertise, Hero, Navbar, Subscription, SubscriptionRA, Wallet, Webinar } from "./components";
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
          <Route path="expertise" element={ <Expertise /> } />
          <Route path="subscription" element={ <Subscription /> } />
          <Route path="webinar" element={<Webinar />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="ra-detail" element={<SubscriptionRA />} />
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
