const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
  resolver: {
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      'lottie',
    ],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
});

module.exports = withNativeWind(config, {input: './src/Styles/global.css'});
