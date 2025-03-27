const ROUTE = {
  HOME: "/",
  BOARD: "/board",
  ITEMS: "/items",
  ADD_ITEM: "/additem",
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
} as const;

type RouteValues = (typeof ROUTE)[keyof typeof ROUTE];

export { ROUTE };
export type { RouteValues };
