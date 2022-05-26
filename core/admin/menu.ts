import type { Route } from "../router.ts"

export interface MenuItem {
  route: Route,
  label: string,
  icon?: string,
  children?: MenuItem[]
}

export class Menu {
  #menuItems: MenuItem[] = []

  add(menuItem: MenuItem) {
    Dust.router.add(menuItem.route);
    this.#menuItems.push(menuItem)
  }

  getItems() {
    return this.#menuItems
  }
}