import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from ".";
import { TypeFilterSelected } from "../../const";

describe("Card component", () => {
  test("default render", () => {
    render(<Card filterDate={TypeFilterSelected.DAY} />);
    const card = screen.getByTestId("cardResume");
    const title = screen.getByText("Total de ventas de Hoy");
    expect(card).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
