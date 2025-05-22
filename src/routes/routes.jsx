import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
// Import pages
import App from "../App";
import Home from "../pages/Home/Home";
import GamesList from "../pages/GamesList/GamesList";
import GameDetails from "../pages/GameDetails/GameDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import OrderConfirmation from "../pages/OrderConfirmation/OrderConfirmation";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import VerifyEmail from "../pages/VerifyEmail/VerifyEmail";
import { getAuthContext } from "../context/AuthContext";

// RouteGuard component to protect private routes
// This component checks if the user is authenticated before allowing access to the route
const RouteGuard = ({ children }) => {
  const { user, loading } = getAuthContext();
  if (loading) {
    return;
  }

  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public routes */}
      <Route index element={<Home />} />
      <Route path="/games" element={<GamesList />} />
      <Route path="/games/:id" element={<GameDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      {/* Private routes */}
      <Route
        path="/checkout"
        element={
          <RouteGuard>
            <Checkout />
          </RouteGuard>
        }
      />
      <Route
        path="/order-confirmation"
        element={
          <RouteGuard>
            <OrderConfirmation />
          </RouteGuard>
        }
      />
      <Route
        path="/profile"
        element={
          <RouteGuard>
            <Profile />
          </RouteGuard>
        }
      />
      <Route
        path="/verify-email"
        element={
          <RouteGuard>
            <VerifyEmail />
          </RouteGuard>
        }
      />

      {/* Nested routes */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
