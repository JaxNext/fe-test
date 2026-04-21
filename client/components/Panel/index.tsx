import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Panel ({ data, onClose }: { data: IMenuItemState, onClose: (data: IMenuItemState) => void }) {
    return (<div className="flex-1 text-center border-r-2 border-r-gray-300 min-w-[180px]">
        <div className="py-2 bg-gray-400 flex justify-center relative">
            <div className="">{ data.label }</div>
            <XMarkIcon
                className="absolute right-2 w-5 h-5 cursor-pointer"
                onClick={() => {onClose(data)}} />
        </div>
    </div>)
}