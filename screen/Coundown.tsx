import React, { useState, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TimeRun from '../component/TimeRun'

export default function CounDownScreen() {

    const [show, setShowTime] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.spaceNum}>
                {show ? <TimeRun duration={10} /> :
                    <Text style={styles.textTime}>READY</Text>}
            </View>
            <TouchableOpacity style={styles.btnTime} onPress={() => setShowTime(!show)}>
                <Text>
                    CoundownTime
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTime: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
    btnTime: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: 20,
        backgroundColor: '#eee',
        borderRadius: 5
    },
    spaceNum: {
        width: 100,
        height: 100,
        backgroundColor: '#eee',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})