import { Mail } from '@/app/mail/components/mail'
import { cookies } from 'next/headers'

export default function MailPage() {

  const layout = cookies().get("react-resizable-panels:layout:mail")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="md:hidden">
        <div className="flex flex-col items-center justify-center h-screen p-6 text-center">
          <img
            src="/logo.png"
            width={120}
            height={120}
            alt="Email Client Logo"
            className="mb-6"
          />
          <h1 className="text-2xl font-bold mb-2">Please use a larger screen</h1>
          <p className="text-muted-foreground">
            This email client is optimized for desktop and tablet views.
          </p>
        </div>
      </div>
      <div className="flex-col hidden md:flex h-screen overflow-scroll">
        <Mail
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
