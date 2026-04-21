interface IMenuItem {
    id: string,
    icon: string,
    label: string,
}

interface IMenuItemState extends IMenuItem {
    isOpened: boolean,
    order: number
}

interface IMenuItemsResponse {
    ok: boolean,
    data: {
        list: IMenuItem[]
    },
    errMsg: string,
}