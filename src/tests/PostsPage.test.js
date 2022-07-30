import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PostsPage } from "pages";

describe("PostsPage", () => {
  it("renders PostsPage correctly", () => {
    render(
      <Router>
        <PostsPage />
      </Router>
    );

    const search = screen.getByPlaceholderText(/Enter a post title/i);

    expect(search).toBeDefined();
  });
});
