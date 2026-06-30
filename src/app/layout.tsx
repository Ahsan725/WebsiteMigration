import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FluidCursor from "@/components/FluidCursor";
import ClientInitializer from "@/components/ClientInitializer";
import PageTransitionLoader from "@/components/PageTransitionLoader";

export const metadata: Metadata = {
  title: "Ahsan Baseer",
  description: "Personal website of Ahsan Baseer",
  icons: {
    icon: "/favicon-transparent.png",
    shortcut: "/favicon-transparent.png",
    apple: "/favicon-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
        {/* Inject theme initialization to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.body.classList.add('light-mode');
              }
            } catch (e) {}
          })();
        ` }} />
      </head>
      <body>
        <div className="scroll-indicator">
          <div className="progress-bar"></div>
        </div>
        
        <FluidCursor />
        <PageTransitionLoader />

        <Header />

        <div id="main-content">
          {children}
        </div>

        {/* Global Floating Actions */}
        <a href="#" className="top" title="Back to Top" data-tooltip="Go to Top">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
        <a className="toggle" id="themeToggle1" title="Toggle Theme" data-tooltip="Toggle Theme">
          <i className="bx bxs-sun"></i>
        </a>
        <button
          type="button"
          className="toggle effects-toggle"
          id="effectsToggle"
          title="Remove Effects"
          style={{ top: "8.5rem" }}
          data-tooltip="Remove Effects"
          aria-label="Toggle visual effects"
          aria-pressed="true"
        >
          <i className="bx bx-layer"></i>
        </button>

        <ClientInitializer />
      </body>
    </html>
  );
}
