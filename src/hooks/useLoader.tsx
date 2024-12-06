import React, { useState, useCallback } from "react";
import { Modal, ActivityIndicator, StyleSheet, View } from "react-native";

// TODO: move colors to code file after add edit delete expense complete
const useLoader = () => {
  const [loading, setLoading] = useState(false);

  const showLoader = useCallback(() => setLoading(true), []);
  const hideLoader = useCallback(() => setLoading(false), []);

  const Loader = () => (
    <Modal visible={loading} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    </Modal>
  );

  return { Loader, showLoader, hideLoader };
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default useLoader;
