import * as Icons from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function SideMenu ({ list, onClickItem }: { list: IMenuItemState[], onClickItem: (param: IMenuItemState) => void }) {
    return (<div className="w-[80px] border-r-2 border-r-gray-300 h-[100vh] flex flex-col items-center py-4 bg-gray-200">
        {list.sort((a, b) => a.order - b.order).map((x: IMenuItemState) => {
            const Icon = Icons[x.icon as keyof typeof Icons]
            return (<motion.div 
                key={x.id} 
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${x.isOpened ? '' : 'opacity-30'} flex flex-col items-center justify-center mb-6 cursor-pointer`}
                onClick={() => {onClickItem(x)}}
            >
                <Icon
                    className='w-6 h-6'
                />
                <div
                    className="flex flex-col">{x.label}
                </div>
            </motion.div>)
        })}
    </div>)
}