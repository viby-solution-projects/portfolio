import { useState, useEffect, useCallback } from "react";

export type RoutePath =
  | "/"
  | "/solution"
  | "/academy"
  | "/ventures"
  | "/about"
  | "/work"
  | "/contact";

function parseHash(hash: string): RoutePath {
  const clean = hash.replace(/^#\/?/, "").toLowerCase();
  switch (clean) {
    case "solution":
    case "viby-solution":
    case "services":
      return "/solution";
    case "academy":
    case "viby-academy":
      return "/academy";
    case "ventures":
    case "viby-ventures":
      return "/ventures";
    case "about":
    case "about-us":
      return "/about";
    case "work":
    case "our-work":
    case "projects":
      return "/work";
    case "contact":
    case "lets-talk":
      return "/contact";
    default:
      return "/";
  }
}

export function useRoute() {
  const [route, setRoute] = useState<RoutePath>(() =>
    parseHash(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((path: RoutePath) => {
    if (path === "/") {
      window.location.hash = "#/";
    } else {
      window.location.hash = `#${path.replace(/^\//, "")}`;
    }
  }, []);

  return { route, navigate };
}
