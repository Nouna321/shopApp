import React from "react";
import { FlatList, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import ButtonHeader from "../../components/UI/ButtonHeader";

import * as productsActions from "../../store/actions/products";

import colors from "../../constants/colors";

const UserProducts = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    props.navigation.navigate("EditProduct", { productId: id });
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={colors.second}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={colors.third}
            title="Delete"
            onPress={() => {
              dispatch(productsActions.deleteProduct(itemData.item.id));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

UserProducts.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Products",
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
          title="Add"
          iconName="md-create"
          onPress={() => {
            navData.navigation.navigate("EditProduct");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProducts;
