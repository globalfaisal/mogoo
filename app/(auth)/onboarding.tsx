import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

import Button from '@/components/button';
import { onboarding } from '@/constants/onboarding';

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/sign-up');
        }}
        className="flex w-full items-end justify-end p-4"
      >
        <Text className="font-JakartaMedium text-sm text-slate-900">Skip</Text>
      </TouchableOpacity>
      <Swiper
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
        ref={swiperRef}
        loop={false}
        dot={
          <View className="mx-1 h-[16px] w-[16px] rounded-full border border-primary-200 bg-primary-100" />
        }
        activeDot={
          <View className="mx-1 h-[18px] w-[18px] rounded-full border-2 border-primary-200 bg-primary-400" />
        }
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-4">
            <Image
              source={item.image}
              resizeMode="contain"
              className="h-[280px] w-full"
            />

            <View className="mt-12 flex w-full flex-row items-center justify-center">
              <Text className="mx-8 text-center text-3xl font-bold text-slate-900">
                {item.title}
              </Text>
            </View>

            <Text className="mx-8 mt-2 text-center font-JakartaMedium text-base text-slate-500">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <Button
        onPress={() =>
          isLastSlide
            ? router.replace('/(auth)/sign-up')
            : swiperRef.current?.scrollBy(1)
        }
        text={isLastSlide ? "Let's Go Places!" : 'Next'}
        variant="primary"
        className="mt-10 w-8/12"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
