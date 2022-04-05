import jsCookie from "js-cookie";
import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import DashboardNav from "../Components/DashboardNav";
import Footer from "../Components/footer";
import HeroSection from "../Components/heroSection";
import Navbar from "../Components/navbar";
import Sidebar from "../Components/sidebar";
import { GlobalProvider } from "../Context/GlobalContext";
import ChangePassword from "../Page/Auth/changePassword";
import Login from "../Page/Auth/login";
import Profile from "../Page/Auth/Profile";
import Register from "../Page/Auth/register";
import Dashboard from "../Page/Dashboard/dashboard";
import DetailJob from "../Page/Dashboard/DetailJob";
import JobForm from "../Page/JobVacancy/jobForm";
import JobList from "../Page/JobVacancy/jobList";
import PageNotFound from "../Page/NotFound/404page";

const Routes = () => {
  const LoginRoute = ({ ...props }) => {
    if (jsCookie.get("token") === undefined) {
      return <Route {...props} />;
    } else if (jsCookie.get("token") !== undefined) {
      return <Redirect to="/dashboard" />;
    }
  };

  const LoggedRoute = ({ ...props }) => {
    if (jsCookie.get("token") === undefined) {
      return <Redirect to="/login" />;
    } else if (jsCookie.get("token") !== undefined) {
      return <Route {...props} />;
    }
  };

  return (
    <>
      <Router>
        <GlobalProvider>
          <Switch>
            {/* Register */}
            <LoginRoute exact path="/register">
              <Register />
            </LoginRoute>

            <LoginRoute exact path="/login">
              <Login />
            </LoginRoute>

            {/* Landing Page */}
            <Route exact path="/">
              <Navbar />
              <HeroSection />
              <Footer />
            </Route>

            {/* Detail Page */}
            <Route exact path="/job-vacancy/:idJob">
              <Navbar />

              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <DetailJob />
              </div>

              <Footer />
            </Route>

            {/** Dashboard Page */}
            <LoggedRoute exact path="/dashboard">
              <DashboardNav />
              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <Sidebar />
                <Dashboard />
              </div>
              <Footer />
            </LoggedRoute>

            {/* List Loker */}
            <LoggedRoute exact path="/dashboard/list-job-vacancy">
              <DashboardNav />
              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <Sidebar />
                <JobList />
              </div>
              <Footer />
            </LoggedRoute>

            <LoggedRoute exact path="/dashboard/list-job-vacancy/form/create">
              <DashboardNav />
              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <Sidebar />
                <JobForm />
              </div>
              <Footer />
            </LoggedRoute>

            <LoggedRoute
              exact
              path="/dashboard/list-job-vacancy/form/edit/:IDJOB"
            >
              <DashboardNav />
              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <Sidebar />
                <JobForm />
              </div>
              <Footer />
            </LoggedRoute>

            <LoggedRoute exact path="/ChangePassword">
              <DashboardNav />
              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <Sidebar />
                <ChangePassword />
              </div>
              <Footer />
            </LoggedRoute>

            <LoggedRoute exact path="/Profile">
              <DashboardNav />
              <div className="w-full flex flex-col lg:flex-row lg:px-6">
                <Sidebar />
                <Profile />
              </div>
              <Footer />
            </LoggedRoute>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </GlobalProvider>
      </Router>
    </>
  );
};

export default Routes;
