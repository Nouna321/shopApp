import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import ProductsOverViewScreen from "../screens/shop/ProductsOverView";
import ProductDetailScreen from "../screens/shop/ProductDetail";
import CartScreen from "../screens/shop/Cart";
import OrdersScreen from "../screens/shop/Orders";
import UserProductsScreen from "../screens/user/UserProducts";
import EditProductScreen from "../screens/user/EditProduct";

import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverView: ProductsOverViewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-cart" size={23} color={drawerConfig.tintColor} />
      ),
    },
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

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-list" size={23} color={drawerConfig.tintColor} />
      ),
    },
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

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-create" size={23} color={drawerConfig.tintColor} />
      ),
    },
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

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.first,
    },
  }
);

export default createAppContainer(ShopNavigator);
