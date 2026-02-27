import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Home Page", () => {
  it("renders the gym name heading", () => {
    render(<Home />);
    expect(
      screen.getByText("George Prevalsky Gym")
    ).toBeInTheDocument();
  });

  it("renders the discipline description", () => {
    render(<Home />);
    expect(
      screen.getByText("Boxing, Muay Thai, Brazilian Jiu-Jitsu and MMA")
    ).toBeInTheDocument();
  });

  it("renders the See Schedule CTA button", () => {
    render(<Home />);
    const link = screen.getByText("See Schedule");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/schedule");
  });
});
