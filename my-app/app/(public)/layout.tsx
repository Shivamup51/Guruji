import { Navbar } from "@/components/navbar";
import Footer from "./_components/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <div>
    <Navbar />
    {children}
    <Footer />
  </div>;
}