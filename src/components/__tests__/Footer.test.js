import { render } from "@testing-library/react";
import Footer from "../Footer";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";

test("footer is rendered", () => {
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
  const footerTxt = footer.getByTestId("footer");
  expect(footerTxt.innerHTML).toBe("Footer");
});
