import { render } from "@testing-library/react";
import Header from "../Header";

test("Logo should load when we render the Header", () => {

    // Load Header
    const header = render(<Header />);
    console.log(header);
    // check if logo is loaded
})