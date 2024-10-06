<div align="center">
  <img src="assets/images/icon.png" alt="moggo Logo" width="100" height="100">
  <h3>mogoo</h3>
  <span></span>
  <p>A sleek and efficient mobile application for connecting riders with nearby drivers.<br/>
  This app offers a seamless user experience for both passengers and drivers.</p>
</div>




## ⚙️ Tech Stack

- React Native (UI)
- Expo (Development Framework)
- Stripe (Payment Gateway)
- PostgreSQL (NeonDB)
- Google Maps API
- Zustand (State Management)
- Clerk (Authentication)
- Tailwind CSS (Styling)

## 🔋 Features

- 👤 **User Authentication**

  - Seamless onboarding flow
  - Phone/Email/password authentication with verification
  - OAuth using Google
  - Secure authorization for different user roles

- 🗺️ **Location Services**

  - Home screen with live location & Google Maps integration
  - Google Places autocomplete for easy destination search
  - Find and select rides directly from the map

- 🚗 **Ride Management**

  - Search for rides by entering 'From' and 'To' locations
  - View detailed ride information (time, fare price)
  - Recent rides history
  - Comprehensive ride history in user profile

- 💳 **Payment Integration**

  - Secure payments using Stripe
  - Support for multiple other payment methods (Mobile Money, Cash, etc.)

- 📱 **Cross-Platform**
  - Responsive design for both Android and iOS devices

## 🚀 Development

Follow these steps to set up the project locally on your machine.

### Requirements

- Node.js v20+ and npm v9+
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/globalfaisal/mogoo.git
cd mogoo
npm install
``` 

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=
DATABASE_URL=
EXPO_PUBLIC_SERVER_URL=https://uber.dev/
EXPO_PUBLIC_GEOAPIFY_API_KEY=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Replace the placeholder values with your actual credentials from:

- [Clerk](https://clerk.dev/)
- [Google Maps](https://developers.google.com/maps)
- [NeonDB](https://neon.tech/)
- [Geoapify](https://www.geoapify.com/)
- [Stripe](https://stripe.com/)

### Running the Project

Start the Expo development server:

```bash
npx expo start --clear 
```
Pro tips: Download the Expo Go app on your mobile device and scan the QR code displayed in the terminal to view the project.

or

```bash
npm run ios | npx expo run:ios 
```
```bash
npm run android | npx expo run:android 
```

This will build the app and open in the iOS simulator or Android emulator.

#### Note on `npx expo run:ios / npx expo run:android`

Use `npx expo run:ios` when you want to run the app directly on the iOS/Android simulator without starting the Expo development server. This command builds the app and launches it in the simulator, which can be useful for testing native modules or making changes that require a full rebuild.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/globalfaisal/mogoo/issues) on GitHub.

---

<div align="center">Built with ❤️ by globalfaisal</div>
