import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MembershipsPage from "@/app/memberships/page";

describe("Memberships Page", () => {
  it("renders the membership sign up heading", () => {
    render(<MembershipsPage />);
    expect(screen.getByText("Membership Sign Up")).toBeInTheDocument();
  });

  it("renders the membership form with required fields", () => {
    render(<MembershipsPage />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^phone$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/membership type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/emergency contact name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/emergency contact phone/i)).toBeInTheDocument();
  });

  it("renders all membership tier options", () => {
    render(<MembershipsPage />);
    expect(screen.getAllByText(/Adult Boxing \/ Muay Thai/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Adult MMA/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Kids/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Family/).length).toBeGreaterThanOrEqual(1);
  });
});
