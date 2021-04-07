import React, {Node, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App: () => Node = () => {
  const sheetRef = useRef(null);

  const handleShowPress = () => {
    sheetRef.current && sheetRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleShowPress}>
          <Text>Show sheet</Text>
        </TouchableOpacity>

        <BottomSheetModal
          ref={sheetRef}
          snapPoints={['25%']}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore">
          <TextInput placeholder="Type something here..." />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default App;
