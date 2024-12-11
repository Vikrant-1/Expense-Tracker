import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const resetRootNavigationTo = ({screen, params}:{screen:string,params?:any}) => {
    if (navigationRef.isReady()) {
      navigationRef.reset({index: 0, routes: [{name: screen, params}]});
    }
  };