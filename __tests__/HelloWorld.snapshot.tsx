import {render} from "@testing-library/react";
import HelloWorld from "../components/HelloWorld";

it('renders a hello world message', () => {
  const {container} = render(<HelloWorld />);
  expect(container).toMatchSnapshot();
});