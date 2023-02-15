import HelloWorld from "../components/HelloWorld";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"

describe('HelloWorld', () => {
  it('renders a hello world message', () => {
    render(<HelloWorld />);

    const heading = screen.getByRole('heading', {name: 'Hello World!'});

    expect(heading).toBeInTheDocument();
  });
});