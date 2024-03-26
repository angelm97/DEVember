import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

type DayListItem = {
    day: number;
}

export default function DayListItem({ day }: DayListItem) {
    return (

        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: '#F9EDE3',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    text: {
        color: '#9b4521',
        fontSize: 70,
        fontFamily: 'AmaticSC_700Bold'
    },
});
