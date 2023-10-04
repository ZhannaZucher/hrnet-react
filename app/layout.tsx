import "../styles/globals.scss"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Header from "./components/Header"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HRnet",
  description: "internal Wealth Health HRnet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
