import {StyleSheet, Text, View} from 'react-native';

export const Footer = ({favoriteCount}: any) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{favoriteCount} Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
  },
});
