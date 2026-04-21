export default function SideMenu ({ list }: { list: IMenuItemState[] }) {
    return (<div className="w-[80px] border-r-2 border-r-gray-300 h-[100vh] flex flex-col items-center py-4 bg-gray-200">
        {list.map((x: IMenuItemState) => {
            return (
                <div
                    key={x.id}
                    className="flex flex-col mb-2">{x.label}
                </div>
            )
        })}
    </div>)
}