<script setup>
import { useExport } from '../../composables/useExport.js'

const { content, isLoading } = useExport()
</script>

<template>
  <BSpinner size="m" v-if="isLoading" />
  <BCode v-else>{{ content }}</BCode>
</template>
