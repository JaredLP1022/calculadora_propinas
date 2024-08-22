import type { MenuItem } from "../types"

type MneuItemProps = {
    item: MenuItem
}

export default function MenuItem({ item }: MneuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        >
            <p>{item.name}</p>
            <p className="font-black"> ${item.price} </p>
        </button>
    )
}
