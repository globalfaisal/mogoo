import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { icons } from '@/constants';

type Form = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    password: '',
  });

  return (
    <ScrollView className="relative flex-1 bg-white">
      <LinearGradient
        colors={['#2A42C2', '#FFFFFF']}
        className="absolute z-0 h-60 w-full"
      />
      <View className="mt-40 w-full flex-1 p-4">
        <Text className="font-JakartaBold text-2xl text-slate-900">
          Let&apos;s get started
        </Text>
        <Text className="mt-1 font-JakartaMedium text-base text-slate-500">
          Create an account to continue
        </Text>
        <View className="mt-12">
          <TextField
            placeholder="Full name"
            icon={icons.email}
            autoCapitalize="none"
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
          />
          <TextField
            placeholder="Email: name@email.com"
            icon={icons.email}
            autoCapitalize="none"
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            className="mt-4"
          />
          <TextField
            placeholder="Password"
            icon={icons.lock}
            autoCapitalize="none"
            secureTextEntry
            textContentType="password"
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
            className="mt-4"
          />
        </View>
        <Button
          title="Create account"
          onPress={() => console.log(form)}
          variant="primary"
          className="mt-8"
        />
        <Link
          href="/(auth)/sign-in"
          className="mt-4 text-center font-JakartaMedium text-base text-slate-500"
        >
          <Text>Already have an account? </Text>
          <Text className="text-primary-500">Sign in</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignUp;
