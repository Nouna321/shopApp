import React, { useState, useCallback, useEffect } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../store/actions/products";

import ButtonHeader from "../../components/UI/ButtonHeader";

const EditProduct = (props) => {
  const prodId = props.navigation.getParam("productId");
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  const [title, setTtitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(
          prodId,
          title,
          description,
          imageUrl,
          +price
        )
      );
    }
  }, []);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTtitle(text)}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProduct.navigationOptions = (navData) => {
  const submitFn = navData.navigation.getParam("submit");
  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Product"
      : "Add Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item title="Save" iconName="md-checkmark" onPress={submitFn} />
      </HeaderButtons>
    ),
  };
};

export default EditProduct;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sens-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
