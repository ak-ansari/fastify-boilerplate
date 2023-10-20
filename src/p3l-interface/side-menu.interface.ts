export interface MenuItem{
    label: string;
    icon: string
    routerLink?:[string],
    id?: string,
    items?:menuItem[]
}
interface menuItem{
    label: string;
    icon: string
    routerLink:[string],
    id?: string
}