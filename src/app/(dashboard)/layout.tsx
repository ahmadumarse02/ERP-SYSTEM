import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className="fixed top-0 left-0 z-50 h-screen w-56 bg-[#E4E4E4] shadow-md">
        <Sidebar />
      </aside>
      <div className="ml-[256px] min-h-screen bg-[#F8F9FD] px-4">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
