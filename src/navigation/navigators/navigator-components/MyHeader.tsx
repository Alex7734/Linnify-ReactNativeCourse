import React from "react";
import { StyleSheet, View } from "react-native";
import { GithubIcon } from "../../../assets/icons";

export const MyHeader = ({leftButton, rightButton, style}: any) => {
  return (
    <View
      style={[
        styles.container,
        style
      ]}>
      {leftButton}
      <GithubIcon style={styles.icon}></GithubIcon>
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#d3cae1',
        shadowOffset:{
          width: 0,
          height: 7,
        },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 17, 
        },

    icon: {
        width: 50, 
        height: 50
    }
});
