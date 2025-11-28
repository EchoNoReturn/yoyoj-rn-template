import type { RootScreenProps } from '@/navigation/types'
import { Paths } from '@/navigation/paths'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import { AssetByVariant } from '@/components/atoms'

function ExampleScreen({ navigation }: RootScreenProps<Paths.Example>) {
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate(Paths.Startup)}>Example Screen</Text>
      <AssetByVariant resizeMode="contain" path="dark/tom" style={{ width: 100, height: 100 }} />
    </SafeAreaView>
  )
}

export default ExampleScreen
