import { menuItems } from "../data/db"

export type MenuItem ={
    id: number;
    name: string;
    price: number;
}


export type itemProps ={
    menu: MenuItem;
    addMenu: (item: MenuItem) => void;
}

export type addItem = MenuItem &{
    quantity: number;
}


export type order ={
    items : addItem[];
    removeItem: (id:number) => void;
    propina: number;
    porcetajePropinas: (porcentaje: number) => void

}


