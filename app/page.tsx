import Image from "next/image";
import SideMenu from "@/client/components/SideMenu";
import Panel from "@/client/components/Panel";

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-start bg-zinc-50 font-sans">
      <SideMenu />
      <div className="flex w-full h-[100vh]">
        <Panel className="flex-1" />
        <Panel className="flex-1" />
        <Panel className="flex-1" />
      </div>
    </div>
  );
}
