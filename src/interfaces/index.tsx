

export type PropsItem = {
    item: Articulo;
    accion: ()=>void;
}

export type Articulo = {
    id: number;
    value: string;
}