import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./page/landing page"
import SplashScreen from "../src/component/splashscreen";

function Router() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <BrowserRouter>
        <Routes>
            {isLoading ? 
            (<Route path="/" element={<SplashScreen />} />) :
            (
            <Route path="/" element={<Landingpage />}/>)}
        </Routes>
    </BrowserRouter>
  )
}

export default Router