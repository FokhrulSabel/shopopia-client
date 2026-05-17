import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import { PATHS } from "./path";
import ProductDetailsPage from "@/features/products/pages/ProductDetailsPage";

const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));

const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));

const ForgotPasswordPage = lazy(
  () => import("@/features/auth/pages/ForgotPasswordPage"),
);

const ProfilePage = lazy(() => import("@/features/auth/pages/ProfilePage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route
            path={PATHS.FORGOT_PASSWORD}
            element={<ForgotPasswordPage />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
