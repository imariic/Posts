import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Post } from "components";
import { post } from "./mocks";

describe("Post", () => {
  it("renders Post correctly", () => {
    render(
      <Router>
        <Post post={post} />
      </Router>
    );

    const title = screen.getByText(/He he he/i);

    expect(title).toBeDefined();
  });
});
