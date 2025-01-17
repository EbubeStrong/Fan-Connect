import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "../components/components/ui/toaster";
import Layout from "./components/Layout";
// import Spinner from "./components/Spinner";
// import ErrorBoundary from "./components/ErrorBoundary";
import AccountPage from "./Pages/AccountPage";
import "./App.css";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

const LandingPage = lazy(() => import("./Pages/LandingPage"));
const NotFound = lazy(() => import("./components/NotFound"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <ErrorBoundary> */}
          {/* <Suspense fallback={<Spinner />}> */}
            <Routes>
              <Route index element={<LandingPage />} />
          <Route path="/choose-account" element={<AccountPage />} />

          <Route path="/sign-in" element={<SignupPage/> } />
          <Route path="/login" element={<LoginPage/> } />
          <Route path="/home" element={<HomePage/> } />
          <Route path="/" element={<Layout />}>
                <Route
                  path="404-test"
                  element={<Link to="/non-existent-page">Test 404 Page</Link>}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          {/* </Suspense> */}
        {/* </ErrorBoundary> */}
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
