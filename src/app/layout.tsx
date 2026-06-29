import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FluidCursor from "@/components/FluidCursor";
import ClientInitializer from "@/components/ClientInitializer";

export const metadata: Metadata = {
  title: "Ahsan Baseer",
  description: "Personal website of Ahsan Baseer",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
      <body className="loading">
        <div className="scroll-indicator">
          <div className="progress-bar"></div>
        </div>
        
        <FluidCursor />
        
        <div id="preloader">
          <img src="/ahsanname.png" alt="Ahsan Logo" />
          <div className="loader"></div>
        </div>

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
        <a className="toggle" id="cursorToggle" title="Toggle Cursor" style={{ top: "8.5rem" }} data-tooltip="Toggle Cursor">
          <i className="bx bx-pointer"></i>
        </a>

        <ClientInitializer />
      </body>
    </html>
  );
}
