export const OPEN_SIDE_MENU = 'OPEN_SIDE_MENU';
export const CLOSE_SIDE_MENU = 'CLOSE_SIDE_MENU';

export const openSideMenu = () => ({
  type: OPEN_SIDE_MENU as typeof OPEN_SIDE_MENU,
});

export const closeSideMenu = () => ({
  type: CLOSE_SIDE_MENU as typeof CLOSE_SIDE_MENU,
});

export type UiAction =
  | ReturnType<typeof openSideMenu>
  | ReturnType<typeof closeSideMenu>;
