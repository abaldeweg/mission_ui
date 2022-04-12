<template>
  <article>
    <b-container size="m">
      <mission-create :style="{ float: 'right' }" />
      <h1>{{ $t('missions') }}</h1>
    </b-container>

    <b-container size="m">
      <mission-edit />
    </b-container>
  </article>
</template>

<script>
import MissionEdit from './../components/mission/Edit.vue'
import MissionCreate from './../components/mission/Create.vue'

export default {
  name: 'mission-view',
  head: {
    title: 'Missions',
  },
  components: {
    MissionEdit,
    MissionCreate,
  },
}
</script>
