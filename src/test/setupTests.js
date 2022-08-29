import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { AuthProvider } from "../Context/AuthContext";

const WrapProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <AuthProvider>{children}</AuthProvider>
    </MemoryRouter>
  );
};
const renderWithProviders = (ui, options) =>
  render(ui, { wrapper: WrapProviders, ...options });

// // const reduxProviders = () => {
// //   let initState = { searchResults: [], currentUser:{} };
// //   const testStore = createStore(
// //     () => Reducer(initState, { type: "@@INIT" }),
// //     applyMiddleware(thunk)
// //   );

//   return ({ children }) => (
//     <MemoryRouter>
//       <Provider store={testStore}>{children}</Provider>
//     </MemoryRouter>
//   );
// };

// const renderWithReduxProviders = (ui, options) => {
//   let TestWrapper = reduxProviders();
//   render(ui, { wrapper: TestWrapper });
// };

global.renderWithProviders = renderWithProviders;
// global.renderWithReduxProviders = renderWithReduxProviders;
global.React = React;
global.render = render;
global.userEvent = userEvent;
