import React from "react";
import { FlatList, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import ButtonHeader from "../../components/UI/ButtonHeader";
import * as cartActions from "../../store/actions/cart";

import colors from "../../constants/colors";

const ProductsOverView = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectedItemHandler = (id, title) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectedItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={colors.second}
            title="View Details"
            onPress={() => {
              selectedItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={colors.third}
            title="to Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

ProductsOverView.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductsOverView;
