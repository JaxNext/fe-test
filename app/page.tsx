"use client"
import { useState } from "react";
import SideMenu from "@/client/components/SideMenu";
import Panel from "@/client/components/Panel";
import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';
import { menuItems as initialMenuItems } from '@/lib/menuData';

export default function Home() {
  const [menuItems, setMenuItems] = useState<IMenuItemState[]>(() => 
    initialMenuItems.map((x, i) => ({
      ...x,
      isOpened: false,
      order: i,
    }))
  )
  function handleClickItem(item: IMenuItemState) {
    setMenuItems(menuItems.map(x => {
      if (x.id === item.id) {
        return {
          ...x,
          isOpened: !item.isOpened
        }
      }
      return x
    }))
  }
  function handleDragEnd(event: any) {
    setMenuItems((items) => {
      const openedItems = items.filter(x => x.isOpened);
      const reorderedOpened = move(openedItems, event);
      
      return items.map(item => {
        if (!item.isOpened) return item;
        const newOrder = reorderedOpened.findIndex(x => x.id === item.id);
        return { ...item, order: newOrder };
      });
    });
  }
  return (
    <div className="flex flex-1 items-start justify-start bg-zinc-50 font-sans">
      <SideMenu
        list={menuItems}
        onClickItem={handleClickItem} />
      <DragDropProvider onDragEnd={handleDragEnd}>
        <div className="flex w-full h-[100vh] overflow-x-auto">
          {menuItems.filter(x => x.isOpened).map((x, i) => {
            return (
                <Panel
                  key={x.id}
                  data={x}
                  index={i}
                  onClose={handleClickItem}
                />
            )
          })}
        </div>
      </DragDropProvider>
    </div>
  );
}
