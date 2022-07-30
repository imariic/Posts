import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "App";
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

  it("checks if posts have been downloaded", async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const text = await screen.findByText(
      /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
    );
    expect(text).toBeDefined();
  });

  it("checks if filtering works", async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const filter = await screen.findByPlaceholderText(/Enter a post title/i);
    const inputValue = "laborum non";
    fireEvent.change(filter, {
      target: {
        value: inputValue,
      },
    });

    expect(filter.value).toBe(inputValue);
    const element = await screen.findAllByText("Name: Chelsey Dietrich");
    expect(element).toBeDefined();
  });
});
