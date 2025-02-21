import 'dotenv/config';

export default {
  expo: {
    name: "Cluey",
    slug: "cluey",
    scheme: "cluey",
    version: "0.0.9",
    main: "index.js",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#FFBF00"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    web: {
      favicon: "./assets/images/favicon.png",
      //bundler: "metro"
    },
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "Allow Cluey to access your photos",
          "cameraPermission": "Allow Cluey to access your camera"
        }
      ],
    ],
    extra: {
      app: {
        secretKeyPhrase: process.env.SECRET_KEY_PHRASE,
      },
      eas: {
        projectId: process.env.EXPO_PROJECT_ID,
      },
      firebase: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
      },
      google: {
        webClientId: process.env.WEB_CLIENT_ID,
        webClientSecret: process.env.WEB_CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI,
      },
      openai: {
        apiKey: process.env.OPENAI_API_KEY,
        orgId: process.env.OPENAI_ORG_ID,
      }
    }
  }
}
