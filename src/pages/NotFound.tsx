import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary shadow-glow mb-4">
          <h1 className="text-4xl font-bold text-primary-foreground">404</h1>
        </div>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 text-primary-foreground"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
