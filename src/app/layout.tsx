import './globals.css'
import ClientLayout from './ClientLayout'

export const metadata = {
  title: 'My App',
  description: 'Next.js App Router Example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
