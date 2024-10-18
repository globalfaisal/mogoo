import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

import Button from '@/components/Button';
import { onboarding } from '@/constants';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full w-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/sign-up');
        }}
        className="ml-auto mr-5 mt-4"
      >
        <Text className="font-JakartaSemiBold text-base text-slate-500">
          Skip
        </Text>
      </TouchableOpacity>
      <Swiper
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
        ref={swiperRef}
        loop={false}
        dot={<View className="mx-1 h-1.5 w-6 rounded-full bg-primary-50" />}
        activeDot={
          <View className="mx-1 h-1.5 w-6 rounded-full bg-primary-500" />
        }
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="mt-4 flex w-full items-center justify-center self-center px-4"
          >
            <Image
              source={item.image}
              resizeMode="contain"
              className="h-80 w-full"
            />

            <View className="mt-16 flex w-full items-center justify-center">
              <Text className="text-center font-JakartaBold text-3xl text-slate-900">
                {item.title}
              </Text>

              <Text className="mx-8 mt-2 text-center font-JakartaMedium text-base text-slate-500">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <Button
        onPress={() =>
          isLastSlide
            ? router.replace('/(auth)/sign-up')
            : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? "Let's Go Places!" : 'Next'}
        variant="primary"
        className="mt-2 max-w-xs"
      />
    </SafeAreaView>
  );
};

export default Welcome;
