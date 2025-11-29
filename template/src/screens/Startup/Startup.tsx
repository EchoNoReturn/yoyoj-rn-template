import type { RootScreenProps } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import { IconByVariant } from '@/components/atoms';
import { i18nt } from '@/hooks';
import { gutter, useTheme } from '@/themes';

function StartupScreen({ navigation }: RootScreenProps<Paths.Startup>) {
  const { layout, colors, borders, fonts } = useTheme();

  return (
    <SafeAreaView
      style={[
        layout.flex_1,
        { backgroundColor: colors.background },
        layout.justifyCenter,
        layout.itemsCenter,
        gutter(5).gap,
      ]}
    >
      <IconByVariant path="fire" color={colors.primary} width={100} height={100} />
      <Text
        style={[
          {
            color: colors.text,
            fontWeight: fonts.weight.bold,
            fontSize: fonts.size.lg,
          },
        ]}
        onPress={() => navigation.navigate(Paths.Example)}
      >
        {i18nt('startup_screen')}
      </Text>
      <Text
        style={[
          {
            color: colors.text,
            fontWeight: fonts.weight.regular,
            fontSize: fonts.size.md,
          },
        ]}
      >
        {i18nt('say_hello', { name: 'Yoyoj RN' })}
      </Text>

      <TouchableOpacity
        style={[
          borders(2, 8, colors.black, 'all'),
          gutter(5).padding,
          { backgroundColor: colors.primary },
        ]}
        onPress={() => navigation.navigate(Paths.Example)}
      >
        <Text style={[{ color: colors.white, fontWeight: fonts.weight.bold }]}>
          Go to Example Screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default StartupScreen;
