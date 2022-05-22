<script setup>
import { useMission } from './../../composables/useMission.js'

const { missions, isLoading, update } = useMission()
</script>

<template>
  <BSpinner size="m" v-if="isLoading" />
  <BForm @submit.prevent="update" v-else>
    <BFormGroup>
      <BFormItem>
        <BFormLabel for="missions">{{ $t('missions') }}</BFormLabel>
      </BFormItem>
      <BFormItem>
        <BFormTextarea id="missions" :rows="20" v-model="missions" />
      </BFormItem>
    </BFormGroup>

    <BFormGroup buttons>
      <BFormItem>
        <BButton design="primary_wide">{{ $t('save') }}</BButton>
      </BFormItem>
    </BFormGroup>
  </BForm>
</template>
