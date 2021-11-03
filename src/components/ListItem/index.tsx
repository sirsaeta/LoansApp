import React from 'react';
import { FlatList, View } from 'react-native';
import { Articulo, PropsItem } from '../../interfaces';
import { Item } from './Item';

type Props = {
    setArticulos: React.Dispatch<React.SetStateAction<Articulo[]>>;
    articulos: Articulo[];
}

export const ListItem = ({articulos, setArticulos}:Props) => {
  
    const renderItem = ({item, accion}: PropsItem) => (
      <Item item={item} accion={accion} />
    );

    return (
        <View>
            <FlatList
                data={articulos}
                keyExtractor={(item)=>item.id?.toString()}
                renderItem={({item,index})=>renderItem({
                    item,
                    accion: ()=>{
                        let newArticulos = [...articulos];
                        newArticulos.splice(index,1)
                        setArticulos(newArticulos)
                    },
                })}
            />
        </View>
    )
}
