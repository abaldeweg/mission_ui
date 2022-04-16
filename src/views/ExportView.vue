<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('export') }}</h1>
      <mission-export />
    </b-container>
  </article>
</template>

<script>
import MissionExport from '../components/export/Export.vue'

export default {
  name: 'mission-view',
  head: {
    title: 'Missions',
  },
  components: {
    MissionExport,
  },
}
</script>
