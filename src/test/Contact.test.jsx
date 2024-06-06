import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Contact from "../Pages/Contact";

describe("Testing Contact component", () => {
  test("Should render h2 tag", () => {
    render(<Contact />);
    const title = screen.getByText(/contactenos:/i);
    expect(title).toBeVisible();
  });
  test("Should render first input", () => {
    render(<Contact />);
    const email = screen.getByRole("email");
    expect(email).toBeDefined();
  });
  test("Should change second input", () => {
    render(<Contact />);
    const mensaje = screen.getByTestId("consulta");
    fireEvent.change(mensaje, {
      target: { value: "Hola, me gustaría saber más acerca de postres" },
    });
    // mensaje.value = "Hola, me gustaría saber más acerca de postres";
    expect(mensaje.value).toBe("Hola, me gustaría saber más acerca de postres");
  });
  test("Should call button function", () => {
    const handleClick = vi.fn();
    render(<Contact handleClick={handleClick} />);
    const btn = screen.getByText("Enviar");
    fireEvent.click(btn);
    expect(handleClick).toBeCalledTimes(1);
  });
});
