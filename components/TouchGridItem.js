import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TouchGridItem = ({ onSelect, items, colors }) => {
  return (
    <View>
      <TouchableOpacity style={styles.gridstyle} onPress={onSelect}>
        <View
          style={{ ...styles.containerGrid, ...{ backgroundColor: colors } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {items}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridstyle: {
    flex: 1,
    margin: 15,
    height: 150,
    width: 180,
    overflow: "hidden",
  },
  containerGrid: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
});

export default TouchGridItem;
