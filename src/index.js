import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <App />
        <Toaster
          containerStyle={{
            top: 20,
            left: 20,
            bottom: 20,
            right: 20,
          }}
        />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
        <Toaster
          containerStyle={{
            top: 20,
            left: 20,
            bottom: 20,
            right: 20,
          }}
        />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
}

// import { hydrate, render } from "react-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <App />
//       <Toaster
//         containerStyle={{
//           top: 20,
//           left: 20,
//           bottom: 20,
//           right: 20,
//         }}
//       />
//     </HelmetProvider>
//   </React.StrictMode>
// );
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }
