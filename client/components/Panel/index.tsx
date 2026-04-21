import { XMarkIcon } from '@heroicons/react/24/solid'
import {useSortable} from '@dnd-kit/react/sortable';

export default function Panel ({ index, data, onClose }: { index: number, data: IMenuItemState, onClose: (data: IMenuItemState) => void }) {
    const { id, label } = data
    const { ref, isDragging } = useSortable({
        id,
        index
    });
    return (<div className={`bg-white flex-1 text-center border-1 border-gray-300 min-w-[180px] ${isDragging ? 'shadow-lg' : ''}`} ref={ref}>
        <div className="py-2 bg-gray-400 flex justify-center relative">
            <div className="">{ label }</div>
            <XMarkIcon
                className="absolute right-2 w-5 h-5 cursor-pointer"
                onClick={() => {onClose(data)}} />
        </div>
    </div>)
}