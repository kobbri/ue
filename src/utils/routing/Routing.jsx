import React from "react";
import "./Routing.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Dashboard from "../../pages/dashboard/Dashboard";
import Admin from "../../pages/admin/Admin";
import NotFound from "../../pages/notFound/NotFound";
import ProtectedRoute from "../protectedroute/ProtectedRoute";
import Members from "../../pages/members/Members";
import Posts from "../../pages/posts/Posts.jsx";
import EditTable from "../../pages/editTable/EditTable";
import Patch from "../../pages/patch/Patch";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <Members />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edittable"
          element={
            <ProtectedRoute>
              <EditTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patch"
          element={
            <ProtectedRoute>
              <Patch />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default Routing;
