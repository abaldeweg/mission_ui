<script setup>
import { useExport } from '../../composables/useExport.js'

const { content, isLoading } = useExport()
</script>

<template>
  <BSpinner size="m" v-if="isLoading" />
  <b-form-textarea
    v-model="content"
    rows="10"
    id="export"
    @focus="$event.target.select()"
    autofocus
    v-else
  />
</template>
