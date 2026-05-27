
import Grid from "@/component/Grid";
import Hero from "@/component/Hero";
import RecentProject from "@/component/RecentProject";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-black w-full">
        <div className="max-w-7xl mx-auto sm:px-10 px-5">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProject />
        </div>
      </div>
    </main>
  );
}