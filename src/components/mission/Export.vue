<template>
  <b-form-textarea :rows="10" v-html="state.export" />
</template>

<script>
import { onMounted } from '@vue/composition-api'
import useMission from './../../composables/useMission'

export default {
  name: 'mission-export',
  setup() {
    const { state, htmlExport } = useMission()
    onMounted(htmlExport)

    return { state }
  },
}
</script>
