<script setup>
import { useTitle } from '@baldeweg/ui'
import MissionExport from '../components/export/ExportExport.vue'

defineProps({
  auth: Object,
})

useTitle({ title: 'Export' })
</script>

<template>
  <BContainer size="m">
    <h1>{{ $t('export') }}</h1>
    <MissionExport />
  </BContainer>
</template>
