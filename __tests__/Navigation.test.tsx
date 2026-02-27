import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Navigation", () => {
  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Schedule")).toBeInTheDocument();
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByText("Instructors")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("does NOT include a link to /memberships", () => {
    render(<Navbar />);
    const allLinks = screen.getAllByRole("link");
    const membershipLinks = allLinks.filter(
      (link) => link.getAttribute("href") === "/memberships"
    );
    expect(membershipLinks).toHaveLength(0);
  });

  it("does not display the word 'Memberships' in navigation", () => {
    render(<Navbar />);
    expect(screen.queryByText("Memberships")).not.toBeInTheDocument();
  });
});
