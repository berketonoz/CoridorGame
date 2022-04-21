import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

} from 'react-native';

export const Map = (props) => {
    const row = props.size;
    const map_row = [];
    const empty_row = [];
    const data = [];
    const empty = row * 2 - 1;
    
    // const Row = (props) => {
        for(let i = 0; i <= row; i++){
            if(i < row){
                map_row.push(
                    <View style={{flexDirection: 'row'}} key={i}>
                        <TouchableOpacity style={styles.box}></TouchableOpacity>
                        <TouchableOpacity style={styles.edge}></TouchableOpacity>
                    </View>
                );
            }
            else{
                map_row.push(
                    <View key={i}>
                        <TouchableOpacity style={styles.box}></TouchableOpacity>
                    </View>
                );
            }
        }

        // return ( 
        //     <View style={{flexDirection: 'row'}} key={0}>
        //         {map_row}
        //     </View>
        // );
    // }

    // const Empty = () => {
    //         for(let i = 0; i <= row; i++){
    //             map_data.push(
    //                 <View key={i} style={{ flexDirection: 'row' }}>
    //                     <TouchableOpacity style={styles.box}></TouchableOpacity>
    //                 </View>
    //             );
    //         }
    //         return map_data;
    // }

    for(let i = 0; i < row; i++){
        data.push(
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} key={i}>
                {map_row}
            </View>
        );
    }
    // console.log(data[3]);
    // console.log(Object.keys(map_row));
    // console.log(map_row[1]);
    return (
        <View style={styles.map}>
            {data}
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 30,
        width: 30,
        backgroundColor: '#614200',
    },
    edge: {
        height: 30,
        width: 15,
        backgroundColor: '#ffffff'
    },
    map: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,

        marginTop: '20%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default Map