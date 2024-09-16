import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
<meta name="robots" content="noindex,nofollow" />

export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Topbar />
        <main className="flex-1 p-6 bg-white">
         {children}
        </main>
      </div>
    </div>
    )
  }