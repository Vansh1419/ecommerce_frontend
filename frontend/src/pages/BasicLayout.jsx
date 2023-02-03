import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import { auth } from "./../firebase/firebase.config";
import { onAuthStateChanged} from "firebase/auth"
import { useEffect } from "react";
function BasicLayout() {
  const location = useLocation();
  const navbarNavigationPaths = [
    { pathName: "/", props: {} },
    {
      pathName: "/search",
      props: {
        disableAddress: true,
        disableAccount: true,
        disableForSearchPage: true,
      },
    },
    {
      pathName: "/product",
      props: {},
    },
    {
      pathName: "/orders",
      props: {},
    },
    {
      pathName: "/account",
      props: {},
    },
  ];
  const footerNavigationPaths = [
    { pathName: "/", props: {} },
    {
      pathName: "/product",
      props: {},
    },
    {
      pathName: "/orders",
      props: {},
    },
    {
      pathName: "/account",
      props: {},
    },
  ];

  const filterPath = (paths, Component) => {
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        if (!currentUser) return <Navigate to="/account" />;
      });
    });
    const filteredPaths = paths.filter(
      ({ pathName }) => pathName == location.pathname
    );
    return filteredPaths.length ? (
      <Component {...filteredPaths[0].props} />
    ) : null;
  };

  return (
    <>
      {filterPath(navbarNavigationPaths, Navbar)}
      <Outlet />
      {filterPath(footerNavigationPaths, Footer)}
    </>
  );
}

export default BasicLayout;
