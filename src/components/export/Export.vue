<template>
  <b-spinner size="m" v-if="state.isLoading" />
  <b-form-textarea :rows="10" v-html="state.export" v-else />
</template>

<script>
import useExport from '../../composables/useExport'

export default {
  name: 'export-export',
  setup() {
    const { state } = useExport()

    return { state }
  },
}
</script>
