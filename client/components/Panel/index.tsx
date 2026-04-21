export default function Panel ({ data }: { data: IMenuItemState }) {
    return (<div className="flex-1 text-center border-r-2 border-r-gray-300">
        <div className="py-2 bg-gray-400 flex justify-center relative">
            <div className="">{ data.label }</div>
            <div className="absolute right-2">x</div>
        </div>
    </div>)
}