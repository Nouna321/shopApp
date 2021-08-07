import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { SafeAreaView, Button, View } from "react-native";
import { useDispatch } from "react-redux";

import ProductsOverViewScreen from "../screens/shop/ProductsOverView";
import ProductDetailScreen from "../screens/shop/ProductDetail";
import CartScreen from "../screens/shop/Cart";
import OrdersScreen from "../screens/shop/Orders";
import UserProductsScreen from "../screens/user/UserProducts";
import EditProductScreen from "../screens/user/EditProduct";
import AuthScreen from "../screens/user/Auth";
import StartUpScreen from "../screens/StartUp";

import * as authActions from "../store/actions/auth";

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
    contentComponent: (props) => {
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={colors.first}
              onPress={() => {
                dispatch(authActions.logout());
                //props.navigation.navigate("Auth");
              }}
            />
          </SafeAreaView>
        </View>
      );
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleStyle: {
        fontFamily: "open-sens",
      },
      headerTintColor: colors.first,
    },
  }
);

const MainNavigator = createSwitchNavigator({
  StartUp: StartUpScreen,
  Auth: AuthNavigator,
  Shop: ShopNavigator,
});

export default createAppContainer(MainNavigator);
