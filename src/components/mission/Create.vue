<template>
  <b-button design="outline" @click="create">
    {{ $t('create') }}
  </b-button>
</template>

<script>
import useMission from './../../composables/useMission'

export default {
  name: 'mission-create',
  setup() {
    const create = useMission()

    return { create }
  },
}
</script>
