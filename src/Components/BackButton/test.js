/**
 * @jest-environment jsdom
 */
 import * as router from "react-router";
 import { screen, fireEvent } from "@testing-library/react";
 import { BackButton } from "./index";
 
 const mockedUsedNavigate = jest.fn();
 jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockedUsedNavigate,
 }));
 
 describe("BackButton", () => {
   beforeEach(() => {
     renderWithProviders(<BackButton />);
     // jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
   });
 
   it("verify back button exits", () => {
     const backBtn = screen.getByRole("button", { name: "back-button" });
     expect(backBtn).toBeInTheDocument();
   });
   it("User navigates to previous page when back button is clicked", async () => {
     const backBtn = screen.getByRole("button", { name: "back-button" });
     await userEvent.click(backBtn);
     expect(backBtn).toBeInTheDocument();
     expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
     expect(mockedUsedNavigate).toHaveBeenCalledWith("-1");
   });
 });
 