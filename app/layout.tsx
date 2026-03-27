import type { Metadata, Viewport } from 'next'
import { Inter, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: '--font-dancing-script',
  weight: ['400', '700'],
  style: ['normal']
});

export const metadata: Metadata = {
  title: 'Poma AI - Snap your food. Slow aging.',
  description: 'Poma AI analyzes your meals and shows you how they affect your biological aging, sleep, skin, and energy. Calories and macros included. Just take a photo.',
  keywords: ['health app', 'nutrition', 'aging', 'wellness', 'AI', 'food tracking', 'longevity'],
  authors: [{ name: 'Bare Mitt AS' }],
}

export const viewport: Viewport = {
  themeColor: '#F6F5F1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
