import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load when we render the Header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");
  // check if logo is loaded
});

test("Cart should have 0 items when we render the Header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    
    const cart = header.getByTestId("cart-zero");
    expect(cart.innerHTML).toBe("Cart 0 Items");
    // check if logo is loaded
  });
