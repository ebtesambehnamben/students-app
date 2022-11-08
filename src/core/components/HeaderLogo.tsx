import { Platform, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '@lib/ui/hooks/useTheme';

export const HeaderLogo = () => {
  const { colors, dark } = useTheme();
  return (
    <View style={styles.container}>
      <Svg width={67} height={18} fill="none" viewBox="0 0 215 60">
        <Path
          fill={dark ? colors.text[50] : colors.primary[700]}
          d="M18.872 29.887c4.712 0 7.656-2.945 7.656-7.656 0-4.712-2.944-7.656-7.656-7.656h-7.656v15.312h7.656zM.616 5.152h20.023c10.6 0 17.079 7.067 17.079 17.079 0 9.422-6.479 17.078-17.08 17.078h-9.422V55.8H.616V5.152zm68.314 32.98c0-5.89-4.122-9.423-8.834-9.423-4.711 0-8.833 3.533-8.833 9.423 0 5.889 4.122 9.422 8.833 9.422 4.712-.589 8.834-3.533 8.834-9.422zm-27.679 0c0-10.601 7.656-18.846 19.434-18.846 11.19 0 19.434 8.245 19.434 18.846 0 10.6-7.656 18.845-19.434 18.845-11.778 0-19.434-8.245-19.434-18.845zM85.42 7.508v48.29h10.01V3.386L85.42 7.508zm23.556 5.889c3.534 0 6.478-2.944 6.478-6.478 0-3.533-2.944-6.478-6.478-6.478-3.533 0-6.478 2.945-6.478 6.478 0 3.534 2.945 6.478 6.478 6.478zm-5.3 42.402h10.012V20.464h-10.012V55.8z"
        />
        <Path
          fill="#EF7B00"
          d="M164.481 40.49c1.914 5.64 5.264 9.468 9.673 12.27 4.375 2.804 9.365 4.102 14.561 4.102 5.195 0 10.219-1.298 14.628-4.101a25.504 25.504 0 0 0 5.777-5.059c3.281-3.965 5.366-9.81 5.366-16.406 0-4.136-.718-7.861-2.187-11.177-1.47-3.315-3.453-5.981-5.879-8.032-4.922-4.101-11.143-6.323-17.705-6.323-7.691-.103-15.416 3.144-20.337 9.126-1.641 1.982-2.94 4.375-3.897 7.177-.957 2.837-1.435 5.914-1.435 9.23 0 3.314.478 6.39 1.435 9.193zm9.673-9.194c0-4.58 1.401-8.271 4.204-11.074 2.803-2.769 6.255-4.17 10.357-4.17 4.169 0 7.656 1.401 10.424 4.17 2.769 2.768 4.136 6.46 4.136 11.074 0 4.648-1.367 8.34-4.136 11.108-2.768 2.769-6.22 4.17-10.424 4.17-4.136 0-7.588-1.401-10.357-4.17-2.803-2.768-4.204-6.494-4.204-11.108zm-39.546-14.902v39.409l10.562.068V16.462l15.688-.068V6.789h-41.87v9.605h15.62z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: Platform.select({
    android: {
      marginRight: 10,
    },
  }),
});
