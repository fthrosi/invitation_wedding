import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Undangan Pernikahan - Sarah & Ahmad",
  description: "Kami mengundang Anda untuk merayakan hari istimewa kami",
  generator: "Fathur Rosi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${inter.variable} ${playfair.variable}`}>
        <Toaster />
        <Suspense fallback={null}>{children}</Suspense>
        
      </body>
    </html>
  )
}
