import type { RootScreenProps } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';
import { AssetByVariant } from '@/components/atoms';
import { useTheme } from '@/themes';

function ExampleScreen({ navigation }: RootScreenProps<Paths.Example>) {
  const { colors, layout, gutter, setThemeMode } = useTheme();

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
      <Text
        style={[{ color: colors.text }]}
        onPress={() => navigation.navigate(Paths.Startup)}
      >
        Example Screen
      </Text>
      <AssetByVariant path="tom" width={100} height={100} />

      <TouchableOpacity onPress={() => setThemeMode('light')}>
        <Text style={[{ color: colors.text }]}>Set Light Theme</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setThemeMode('dark')}>
        <Text style={[{ color: colors.text }]}>Set Dark Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setThemeMode('system')}>
        <Text style={[{ color: colors.text }]}>Set System Theme</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ExampleScreen;
