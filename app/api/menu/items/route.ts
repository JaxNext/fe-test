import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET (): NextResponse<IMenuItemsResponse> {
    return NextResponse.json({
        ok: true,
        data: {
            list: [
                {
                    id: 'a',
                    icon: 'MapIcon',
                    label: 'Map',
                },
                {
                    id: 'b',
                    icon: 'MusicalNoteIcon',
                    label: 'Music',
                },
                {
                    id: 'c',
                    icon: 'ChatBubbleBottomCenterIcon',
                    label: 'Chat',
                },
            ]
        },
        errMsg: '',
    } as IMenuItemsResponse)
}