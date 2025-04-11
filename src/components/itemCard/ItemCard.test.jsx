import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";

describe("ItemCard component", () => {
    const data = {
        id: 0, 
        title: "Product One",
        price: 11.2,
        image: null 
    }

  it("renders component", () => {
    render(<ItemCard data={data}/>);
    expect(screen.getByRole("heading").textContent).toMatch(/Product One/i);
  });

  it("clicking button calls addToCart", async () => {
    const fakeAddToCart = vi.fn();
    const user = userEvent.setup();
    render(<ItemCard data={data} addToCart={fakeAddToCart}/>);

    const button = screen.getByRole("button", { name: "Add to cart"});
    await user.click(button);

    expect(fakeAddToCart).toHaveBeenCalled();

  });

  it("not clicking button doesnt call addToCart", async () => {
    const fakeAddToCart = vi.fn();
    render(<ItemCard data={data} addToCart={fakeAddToCart}/>);

    expect(fakeAddToCart).not.toHaveBeenCalled();
  });

});


