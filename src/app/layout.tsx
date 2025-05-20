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

// page라우터와 app라우터 차이
// 기본으로 만들어지는 파일
// 이 파일은 페이지의 기본적인 레이아웃을 구성하는 요소
// 루트에는 단 하나의 layouy을 둘 수 있음
// 이 layout은 모든 페이지에 영향을 미치는 공통 레이아웃
// 페이지 하위에 추가되는 layout은 해당 주소 하위에만 적용
// layout은 주소별 공통 UI를 포함할 수 있을 뿐 아니라 _app과 _document를 대신해 웹 페이지를 시작하는데 필요한 공통 코드 삽입
