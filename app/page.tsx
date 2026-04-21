"use client"
import { useState, useEffect } from "react";
import SideMenu from "@/client/components/SideMenu";
import Panel from "@/client/components/Panel";

export default function Home() {
  const [menuItems, setMenuItems] = useState<IMenuItemState[] | []>([])
  useEffect(() => {
    async function fetchMenuItems() {
      const res: IMenuItemsResponse = await (await fetch('/api/menu/items')).json() || {}
      const { list } = res.data || {}
      const items = list.map((x: IMenuItem, i:number) => {
        return {
          ...x,
          isOpened: false,
          order: i,
        }
      })
      setMenuItems(items)
    }
    fetchMenuItems()
  }, [])
  return (
    <div className="flex flex-1 items-start justify-start bg-zinc-50 font-sans">
      <SideMenu list={menuItems} />
      <div className="flex w-full h-[100vh]">
        {menuItems.filter(x => x.isOpened).map(x => {
          return (
          <Panel
            key={x.id}
            data={x}
          />)
        })}
      </div>
    </div>
  );
}
