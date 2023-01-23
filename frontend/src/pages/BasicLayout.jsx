import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";

function BasicLayout() {
  const location = useLocation();
  const navbarNavigationPaths = [
    { pathName: "/", props: {} },
    {
      pathName: "/search",
      props: { disableAddress: true, disableAccount: true, disableForSearchPage: true },
    },
  ];
  const footerNavigationPaths = [{ pathName: "/", props: {} }];

  const filterPath = (paths, Component) => {
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
