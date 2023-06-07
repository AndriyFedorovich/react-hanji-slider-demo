import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Hanji slider demo',
  description: 'React Hanji Slider is a React component that allows users to compare two blocks of content interactively. By dragging a slider control, users can unveil or conceal the respective content blocks, providing a visually engaging method for comparing different types of data or images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
