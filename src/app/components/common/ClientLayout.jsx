// ClientLayout.js
"use client"; // Ensure this runs on the client side
import { useEffect } from "react";
import { LoadingProvider, useLoading } from "./LoadingContext";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
  return (
    <LoadingProvider>
      <MainContent>{children}</MainContent>
    </LoadingProvider>
  );
}

function MainContent({ children }) {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // Simulate loading process and set isLoading to false when complete
    setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
  }, [setIsLoading]);

  return isLoading ? <Loader /> : children;
}
