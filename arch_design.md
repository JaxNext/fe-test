# Architectrue Design Doc

## Requirement

> See [readme.md](./readme.md) for more details.

## Frameworks Decision

- [Next.js](https://nextjs.org) as the backbone.
- [Tailwind CSS](https://tailwindcss.com/) for CSS layouts and styles.
- [DND Kit](https://dndkit.com/) for drag and drop features.
- [heroicons](https://heroicons.com/) as the icon library.

## UI Components

### Left Sidemenu

- Fixed width and full viewport height.
- Render menu items by a array type prop.

### Menu item
- Change active status while toggling right side panels:
    - Click item: highlighted when panel opened, vice versa.
    - Close panel: change to gray mode.
- While dragging to change the panels' orders, the orders of menu items changes accordingly.
- Data model:

    ```js
    {
        id: string,
        icon: string,
        label: string,
        isOpened: boolean,
        order: number,
    }
    ```

### Panel
- Click menu item to toggle a panel.
- All opened panels evenly take the full width of their parent container, panel has a minimal width.
- Click right top corner close button to close, also change Menu item active status.
- Show scroll bar when viewport is too narrow.
- Drag the header of panel and drop: reorder, apply animations when dropped.
- Data model:
    ```js
    {
        id: string,
        title: string,
        order: number,
    }
    ```

## API Endpoints

### Menu items data

- Method: GET
- Path: /api/menu/items
- Response:
    ```js
    {
        id: string,
        icon: string,
        label: string,
    }
    ```

## State Management

Fetch and maintain the menu item list at top level components, mutations from menu item and panel all commit to top level.

TODO: Handle loading and error status.