import { RenderOptions, render as rtlRender } from "@testing-library/react";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

interface IRenderOptions extends RenderOptions {
  route?: string;
}

interface AllTheProvidersProps {
  children: ReactNode;
}

const render = (ui: React.ReactElement, options?: IRenderOptions) => {
  const { route, ...renderOptions } = options || {};

  window.history.pushState({}, "Test", route || "/");

  const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );

  return rtlRender(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
