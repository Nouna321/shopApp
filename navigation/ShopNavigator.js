import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ProductsOverViewScreen from "../screens/shop/ProductsOverView";
import ProductDetailScreen from "../screens/shop/ProductDetail";

import colors from "../constants/colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverView: ProductsOverViewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.first,
      },
      headerTitleStyle: {
        fontFamily: "open-sens",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(ProductsNavigator);
