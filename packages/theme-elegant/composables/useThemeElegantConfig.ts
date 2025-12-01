// packages/theme-elegant/composables/useThemeElegantConfig.ts
export const useThemeElegantConfig = () => {
  const appConfig = useAppConfig()

  // add runtime defaults/guards here if you ever need
  return computed(() => appConfig.themeElegant ?? {})
}
