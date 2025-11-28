import type { RootScreenProps } from '@/navigation/types'
import { Paths } from '@/navigation/paths'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import { IconByVariant } from '@/components/atoms'
import { i18nt } from '@/hooks'
import layout from '@/themes/layout'

function StartupScreen({ navigation }: RootScreenProps<Paths.Startup>) {
  return (
    <SafeAreaView style={[layout.flex_1]}>
      <IconByVariant path="fire" />
      <Text onPress={() => navigation.navigate(Paths.Example)}>
        {i18nt('startup_screen')} - {i18nt('say_hello', { name: 'Yoyoj' })}
      </Text>
    </SafeAreaView>
  )
}

export default StartupScreen
