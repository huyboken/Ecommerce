import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/Products/ProductDetails";
import LoginSignup from "./components/Authentication/LoginSignup";
import { useSelector } from "react-redux";
import UserData from "./more/UserData";
import Store from "./store";
import { loadUser } from "./actions/UserAction";
import Profile from "./components/User/Profile";
import ProtectedRoute from "./route/ProtectedRoute";
import UpdatePassword from "./components/User/UpdatePassword";
import EditProfile from "./components/User/EditProfile";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Search from "./components/Products/Search";
import Support from "./more/Support";
import Cart from "./components/Cart/Cart";
import Favourite from "./components/Cart/Favourite";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MoreOption from "./components/User/MoreOption";
import MyOrder from "./components/User/MyOrder";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka", "Segoe Script"],
      },
    });
    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path={"/process/payment"} component={Payment} />
        </Elements>
      )}

      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/product/:id"} component={ProductDetails} />
        <Route exact path={"/login"} component={LoginSignup} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/products"} component={Products} />
        <Route exact path={"/products/:keyword"} component={Products} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/support"} component={Support} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/favourites"} component={Favourite} />
        <Route exact path={"/more"} component={MoreOption} />
        <ProtectedRoute exact path={"/shipping"} component={Shipping} />
        <ProtectedRoute exact path={"/orders"} component={MyOrder} />
        <ProtectedRoute
          exact
          path={"/order/confirm"}
          component={ConfirmOrder}
        />
        <ProtectedRoute exact path={"/me"} component={Profile} />
        <ProtectedRoute exact path={"/success"} component={OrderSuccess} />
        <ProtectedRoute exact path={"/me/update"} component={UpdatePassword} />
        <ProtectedRoute
          exact
          path={"/me/update/info"}
          component={EditProfile}
        />
      </Switch>
    </Router>
  );
}

export default App;
