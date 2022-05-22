<script setup>
import { useTitle } from '@baldeweg/ui'
import MissionCreate from './../components/mission/MissionCreate.vue'
import MissionEdit from './../components/mission/MissionEdit.vue'

defineProps({
  auth: Object,
})

useTitle({ title: 'Missions' })
</script>

<template>
  <BContainer size="m">
    <MissionCreate :style="{ float: 'right' }" />
    <h1>{{ $t('missions') }}</h1>
  </BContainer>

  <BContainer size="m">
    <MissionEdit />
  </BContainer>
</template>
