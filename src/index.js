import reactDOM from "react-dom";
import react from "react";
import App from "./App";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function AppF() {
  return (
    <react.Fragment>
      <App />
    </react.Fragment>
  );
}
const rootElement = document.getElementById("root");
reactDOM.render(<AppF />, rootElement);
