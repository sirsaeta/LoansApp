import { useState } from 'react'
import { Articulo } from '../interfaces';

export const useHome = () => {
    
    const [articulos, setArticulos] = useState<Articulo[]>([]);

    return {articulos, setArticulos}
}
