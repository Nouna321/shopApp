import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as cartActions from "../../store/actions/cart";

import colors from "../../constants/colors";

const ProductDetail = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.button}>
        <Button
          color={colors.first}
          title="Add To Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>

      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetail.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  button: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontFamily: "open-sens-bold",
    fontSize: 20,
    color: colors.third,
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontFamily: "open-sens",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
