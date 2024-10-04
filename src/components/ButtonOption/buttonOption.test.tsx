import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonDateOption from ".";
import { TypeFilterSelected } from "../../const";

const fnMock = vi.fn();
describe("buttonOption component", () => {
  test("default render", () => {
    render(
      <ButtonDateOption
        filterDate={TypeFilterSelected.MONTH}
        setFilterDate={fnMock}
      />
    );
    const buttonSet = screen.getByTestId("buttonMonth");
    expect(buttonSet).toBeTruthy();
  });

  test("selected option", () => {
    render(
      <ButtonDateOption
        filterDate={TypeFilterSelected.MONTH}
        setFilterDate={fnMock}
      />
    );
    const buttonSet = screen.getByTestId("buttonMonth");
    expect(buttonSet).toBeTruthy();
    const buttonSelected = screen.getByTestId("buttonDay");
    fireEvent.click(buttonSelected);
    expect(fnMock).toBeCalledWith(TypeFilterSelected.DAY)
  });
});
