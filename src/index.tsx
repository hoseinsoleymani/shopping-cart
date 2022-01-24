import "../node_modules/bootstrap/dist/css/bootstrap.css";

import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import ReactLoading from "react-loading";

const queryClient = new QueryClient();

ReactDOM.render(
  <Router>
    <Suspense
      fallback={
        <ReactLoading
          type={"cubes"}
          color={"royalblue"}
          width={175}
          className="loading"
        />
      }
    >
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </Router>,
  document.getElementById("root")
);
