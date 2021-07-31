import React, { useEffect, useState } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import colors from "../../constants/colors";
import { useSelector, useDispatch } from "react-redux";

import ButtonHeader from "../../components/UI/ButtonHeader";
import OrderItem from "../../components/shop/OrderItem";

import * as OrdersActions from "../../store/actions/orders";

const Orders = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(OrdersActions.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.first} />
      </View>
    );
  }

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

Orders.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Orders;
