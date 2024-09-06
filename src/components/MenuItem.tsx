import type { MenuItem } from "../types"

type MneuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MneuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 text-lg rounded-lg flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black"> ${item.price} </p>
        </button>
    )
}
