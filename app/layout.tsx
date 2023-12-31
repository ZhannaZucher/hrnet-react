import "../styles/globals.scss"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Header from "./components/Header"
import Providers from "./store/providers"

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
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
