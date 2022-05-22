<script setup>
import { useMission } from './../../composables/useMission.js'

const { create } = useMission()
</script>

<template>
  <BButton design="outline" @click="create">
    {{ $t('create') }}
  </BButton>
</template>
