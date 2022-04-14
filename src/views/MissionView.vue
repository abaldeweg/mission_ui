<template>
  <article>
    <b-container size="m">
      <mission-create :style="{ float: 'right' }" />
      <h1>{{ $t('missions') }}</h1>
    </b-container>

    <b-container size="m">
      <mission-edit />
    </b-container>

    <b-container size="m">
      <h2>Export</h2>
      <mission-export />
    </b-container>
  </article>
</template>

<script>
import MissionEdit from './../components/mission/Edit.vue'
import MissionCreate from './../components/mission/Create.vue'
import MissionExport from './../components/mission/Export.vue'

export default {
  name: 'mission-view',
  head: {
    title: 'Missions',
  },
  components: {
    MissionEdit,
    MissionCreate,
    MissionExport,
  },
}
</script>
