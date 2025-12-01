import { computed } from 'vue'
import type { ThemeSimplicaConfig } from '~/types/themeSimplicaConfig'

export const useThemeSimplicaConfig = () => {
  const appConfig = useAppConfig()
  return computed(() => appConfig.themeSimplica as ThemeSimplicaConfig)
}
