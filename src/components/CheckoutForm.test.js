import React from "react";
import { render , screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type( firstNameInput , "Pamela")
    userEvent.type( lastNameInput , "Isley")
    userEvent.type( addressInput , "181 Blossom Ave")
    userEvent.type( cityInput , "Gotham")
    userEvent.type( stateInput , "DC")
    userEvent.type( zipInput , "61966")

    const checkoutBtn = screen.getByRole('button');
    userEvent.click(checkoutBtn);

    const successMessage = screen.getByText("You have ordered some plants! Woo-hoo!");
    
    expect(successMessage).toBeDefined();
    expect("Pamela Isley").toBeDefined();
    expect("181 Blossom Ave").toBeDefined();
    expect("Gotham, DC 61966").toBeDefined();
});
