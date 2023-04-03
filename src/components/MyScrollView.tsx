import React from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';

const DATA = [
  {
    title: 'Fruits',
    data: [
      { id: '1', image: require('.assets/images/apple.png') },
      { id: '2', image: require('.assets/images/banana.png') },
      { id: '3', image: require('.assets/images/orange.png') },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      { id: '4', image: require('.assets/images/carrot.png') },
      { id: '5', image: require('.assets/images/tomato.png') },
      { id: '6', image: require('.assets/images/potato.png') },
    ],
  },
];


const Item = ({ title, data }: any) => (
  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Image source={item.image} style={{ width: 100, height: 100, marginRight: 10 }} />}
    />
  </View>
);

export const Scroll = () => {
  return (
    <ScrollView>
      {DATA.map((item) => (
        <Item title={item.title} data={item.data} key={item.title} />
      ))}
    </ScrollView>
  );
};
