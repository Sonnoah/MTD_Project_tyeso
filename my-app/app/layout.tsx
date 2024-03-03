import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Narbar from "./component/appbar";
import { Toaster } from "react-hot-toast";
import Provider from "./component/Provider";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypsoStock",
  description: "MTD_Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Provider>
            <Narbar />
            {children}
            <Toaster
              toastOptions={{
                style: { background: " rgb(51 65 85)", color: "#fff" },
              }}
            />
          </Provider>
        </main>
      </body>
    </html>
  );
}
