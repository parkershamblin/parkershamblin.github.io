"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@once-ui-system/core";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
	children: React.ReactNode;
}

const dynamicRoutes = ["/blog", "/work"] as const;

function checkRouteEnabled(pathname: string | null) {
  if (!pathname) return true;

  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  for (const route of dynamicRoutes) {
    if (pathname.startsWith(route) && routes[route]) {
      return true;
    }
  }

  return false;
}

function checkPasswordRequired(pathname: string | null) {
  if (!pathname) return false;

  return Boolean(protectedRoutes[pathname as keyof typeof protectedRoutes]);
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const initialRouteEnabled = checkRouteEnabled(pathname);
  const initialPasswordRequired = checkPasswordRequired(pathname);
  const [isRouteEnabled, setIsRouteEnabled] = useState(initialRouteEnabled);
  const [isPasswordRequired, setIsPasswordRequired] = useState(initialPasswordRequired);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(initialPasswordRequired);

  useEffect(() => {
    const performChecks = async () => {
      setLoading(true);
      setIsRouteEnabled(false);
      setIsPasswordRequired(false);
      setIsAuthenticated(false);

      const routeEnabled = checkRouteEnabled(pathname);
      const passwordRequired = checkPasswordRequired(pathname);
      setIsRouteEnabled(routeEnabled);
      setIsPasswordRequired(passwordRequired);

      if (passwordRequired) {
        const response = await fetch("/api/check-auth");
        if (response.ok) {
          setIsAuthenticated(true);
        }
      } else {
        setIsAuthenticated(true);
      }

      setLoading(false);
    };

    performChecks();
  }, [pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
		return <NotFound />;
	}

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
