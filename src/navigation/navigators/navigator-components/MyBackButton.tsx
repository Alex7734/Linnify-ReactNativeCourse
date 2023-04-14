import { Pressable } from "react-native";
import { GoBack } from "../../../assets/icons";

export const MyBackButton = ({ onPress }: any) => {
    return (
      <Pressable onPress={onPress} style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}      >
            <GoBack style={{width: 30, height: 30}} ></GoBack>   
      </Pressable>
    );
  };