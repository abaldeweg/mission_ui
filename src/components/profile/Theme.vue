<template>
  <article>
    <h2>{{ $t('dark_mode') }}</h2>
    <input type="checkbox" id="dark" v-model="dark" />
    <b-form-label for="dark">{{ $t('dark_mode') }}</b-form-label>
  </article>
</template>

<script>
import { useColorScheme } from '@baldeweg/ui'

export default {
  name: 'profile-theme',
  setup() {
    const { dark } = useColorScheme()

    return { dark }
  },
}
</script>
