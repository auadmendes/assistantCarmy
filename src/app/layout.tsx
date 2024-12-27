// This is your layout.tsx or RootLayout (server-side component)
import { ClerkProvider } from "@clerk/nextjs";
import CustomLayout from "@/custom-layout";

import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import ClientOnlyComponent from "./_components/client-side-component-layout";

// Fonts
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

// Metadata (server-side)
export const metadata = {
  title: "Carmy",
  description: "Project using AI SDK + Open AI",
  icons: {
    icon: ["./favicon2.ico?v==4"],
  },
};

// Server-side layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.className}`}>
          <ClientOnlyComponent />
          <CustomLayout>{children}</CustomLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
