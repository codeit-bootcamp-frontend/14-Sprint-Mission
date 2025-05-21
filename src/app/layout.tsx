import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import QueryProvider from "./query-provider";

export const metadata: Metadata = {
  title: "PandaMarket",
  description:
    "우리 모두가 함께 즐길 수 있는 최고의 중고마켓인 '판다마켓'의 자유게시판입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="antialiased ">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
