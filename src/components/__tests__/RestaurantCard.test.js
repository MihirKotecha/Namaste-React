import RestrauntCards from "../RestrauntCards";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardData.json"
import { render,screen } from "@testing-library/react";

it("Should render the restaurant card component with the data", () => {
    render(
        <RestrauntCards resData={MOCK_DATA}/>
    );
    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();
});