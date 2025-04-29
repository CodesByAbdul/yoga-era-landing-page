import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  // Favicon links
  { rel: "icon", href: "/logo.svg" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  
  // Fonts
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Add metadata for your site
export const meta: Route.MetaFunction = () => [
  { title: "Yoga Era | Modern Yoga Experience" },
  { name: "description", content: "Experience the transformative power of yoga with Yoga Era. Join our community for classes, workshops, and wellness resources." },
  { name: "keywords", content: "yoga, wellness, fitness, meditation, mindfulness, yoga classes" },
  { name: "author", content: "Yoga Era" },
  
  // Open Graph tags for social sharing
  { property: "og:title", content: "Yoga Era | Modern Yoga Experience" },
  { property: "og:description", content: "Transform your practice with our modern approach to yoga" },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://yogaera.vercel.app" }, // Replace with your actual URL
  { property: "og:image", content: "https://yogaera.vercel.app/og-image.jpg" }, // Replace with your actual image
  
  // Twitter Card tags
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Yoga Era | Modern Yoga Experience" },
  { name: "twitter:description", content: "Transform your practice with our modern approach to yoga" },
  { name: "twitter:image", content: "https://yogaera.vercel.app/twitter-image.jpg" }, // Replace with your actual image
  
  // Theme color for browser UI
  { name: "theme-color", content: "#4CAF50" }, // Replace with your brand color
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}