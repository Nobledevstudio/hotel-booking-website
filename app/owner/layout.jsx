import Navbar from '@/app/components/hotelOwner/Navbar'
import Sidebar from '@/app/components/hotelOwner/Sidebar'

export default function OwnerLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
