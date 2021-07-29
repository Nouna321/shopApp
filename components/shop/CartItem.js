import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.data}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.main}>{props.title}</Text>
      </Text>
      <View style={styles.data}>
        <Text style={styles.main}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity onPress={props.onRemove} style={styles.delete}>
            <Ionicons name="md-trash" size={23} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  data: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sens",
    color: "grey",
    fontSize: 16,
  },
  main: {
    fontFamily: "open-sens-bold",
    fontSize: 16,
  },

  delete: {
    marginLeft: 20,
  },
});
