import React from "react";
import { FlatList, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useSelector } from "react-redux";

import ButtonHeader from "../../components/UI/ButtonHeader";
import OrderItem from "../../components/shop/OrderItem";

const Orders = (props) => {
  const orders = useSelector((state) => state.orders.orders);

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
