import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import LoadingFallback from "@/components/common/LoadingFallback";
import { PATHS } from "./path";

// Lazy load auth pages
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("@/features/auth/pages/ForgotPasswordPage"),
);
const ProfilePage = lazy(() => import("@/features/auth/pages/ProfilePage"));
const OrdersPage = lazy(() => import("@/features/auth/pages/OrdersPage"));

// Lazy load product pages
const ProductsPage = lazy(
  () => import("@/features/products/pages/ProductsPage"),
);
const ProductDetailsPage = lazy(
  () => import("@/features/products/pages/ProductDetailsPage"),
);
const ShopPage = lazy(() => import("@/features/products/pages/ShopPage"));
const CategoriesPage = lazy(
  () => import("@/features/products/pages/CategoriesPage"),
);
const DealsPage = lazy(() => import("@/features/products/pages/DealsPage"));

// Lazy load cart and wishlist pages
const CartPage = lazy(() => import("@/features/cart/pages/CartPage"));
const WishlistPage = lazy(
  () => import("@/features/wishlist/pages/WishlistPage"),
);

// Lazy load 404 page
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Home Route */}
          <Route path={PATHS.HOME} element={<MainLayout />} />

          {/* Auth Routes */}
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />

          {/* Protected Routes */}
          <Route
            path={PATHS.PROFILE}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={PATHS.ORDERS}
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />

          {/* Product Routes */}
          <Route path={PATHS.PRODUCT} element={<ProductsPage />} />
          <Route path={`${PATHS.PRODUCT}/:id`} element={<ProductDetailsPage />} />
          <Route path={PATHS.SHOP} element={<ShopPage />} />
          <Route path={PATHS.CATEGORIES} element={<CategoriesPage />} />
          <Route path={PATHS.DEALS} element={<DealsPage />} />

          {/* Cart and Wishlist Routes */}
          <Route path={PATHS.CART} element={<CartPage />} />
          <Route path={PATHS.WISHLIST} element={<WishlistPage />} />

          {/* 404 - Not Found Route */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
