import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("ContactUs Componenet should render correctly", ()=>{
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Contact Us text should be rendered on the page",()=>{
    render(<Contact />);
    const text = screen.getByText("Contact Us");
    expect(text).toBeInTheDocument();
})