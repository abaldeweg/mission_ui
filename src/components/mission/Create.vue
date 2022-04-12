<template>
  <b-button design="outline" @click="mission.create">
    {{ $t('create') }}
  </b-button>
</template>

<script>
import useMission from '@/composables/useMission'

export default {
  name: 'mission-create',
  setup() {
    const mission = useMission()

    return { mission }
  },
}
</script>
