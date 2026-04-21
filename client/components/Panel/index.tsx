export default function Panel ({ className }: { className?: string }) {
    return (<div className={`${className} text-center border-r-2 border-r-gray-300`}>
        <div className="py-2 bg-gray-400 flex justify-center relative">
            <div className="">Panel</div>
            <div className="absolute right-2">x</div>
        </div>
    </div>)
}