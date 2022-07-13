// manager all routes
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="teams" element={<Teams />}>
                        <Route path=":teamId" element={<Team />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />
                    </Route>
                </Route> */}
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
