import React from "react";
import {render} from "@testing-library/react";
import Contact from "./Contact";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("<Contact/>", () => {
    it("Matches snapshot", () => {
        const contact = render(<Contact/>);
        expect(contact).toMatchSnapshot();
    });
    it("LoadingSpinner is visible on initial load", async () => {
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId("loadingSpinner")).toBeVisible();
    });
    it("Contact Page Displays after 1.5 seconds", async () => {
        jest.useFakeTimers();
        const {rerender, getByTestId} = render(<Contact/>);
        act(() => {
            rerender(<Contact/>);
            jest.advanceTimersByTime(1500);
        });
        expect(() => getByTestId("loadingSpinner")).toThrowError();
        expect(getByTestId("contactPageHeader")).toBeVisible();
    });
});