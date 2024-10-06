import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View className="flex-1 items-center justify-center p-5">
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Link href="/" className="mt-4 py-4" />
    </View>
  );
};

export default NotFoundScreen;
