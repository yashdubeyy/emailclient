import "@/styles/globals.css";
import Kbar from "@/app/mail/components/kbar";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provicer";
import { Toaster } from "sonner";

// Helper function to clear local storage on app mount
const clearOldLocalStorageKeys = `
  (function() {
    try {
      // Clear old normalhuman keys from localStorage
      const keys = Object.keys(localStorage);
      const oldKeys = keys.filter(key => key.includes("normalhuman"));
      oldKeys.forEach(key => {
        const newKey = key.replace("normalhuman", "emailclient");
        const value = localStorage.getItem(key);
        if (value) {
          localStorage.setItem(newKey, value);
        }
        localStorage.removeItem(key);
      });
    } catch (e) {
      console.error("Error clearing localStorage:", e);
    }
  })()
`;

export const metadata: Metadata = {
  title: "Email Client",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <head>
          <script dangerouslySetInnerHTML={{ __html: clearOldLocalStorageKeys }} />
        </head>
        <body>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <TRPCReactProvider>
              <Kbar>
                {children}
              </Kbar>
            </TRPCReactProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
