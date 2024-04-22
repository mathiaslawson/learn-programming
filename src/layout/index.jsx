import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PromptLayout = ({ children }) => {
  return (
    <>
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};

const NonAuthLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <>
      <div>
        {" "}
        <Navbar />
        {children}
      </div>
    </>
  );
};

function LayoutWrapper({ allroutes }) {
  return (
    <>
      <Routes>
        {allroutes?.map((route, index) => {
          return (
            <>
              {
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <>
                      {route.routeId === 1 ? (
                        <AuthLayout>{route.element}</AuthLayout>
                      ) : route.routeId === 2 ? (
                        <PromptLayout>{route.element}</PromptLayout>
                      ) : (
                        <NonAuthLayout>{route.element}</NonAuthLayout>
                      )}
                    </>
                  }
                />
              }
            </>
          );
        })}
      </Routes>
    </>
  );
}

LayoutWrapper.propTypes = {
  allroutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      element: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};
PromptLayout.propTypes = {
  children: PropTypes.node,
};
NonAuthLayout.propTypes = {
  children: PropTypes.node,
};

export default LayoutWrapper;
