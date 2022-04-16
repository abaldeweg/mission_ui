<template>
  <b-spinner size="m" v-if="state.isLoading" />
  <b-form @submit.prevent="update" v-else>
    <b-form-group>
      <b-form-item>
        <b-form-label for="missions">{{ $t('missions') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-textarea id="missions" :rows="20" v-model="state.missions" />
      </b-form-item>
    </b-form-group>

    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary_wide">{{ $t('save') }}</b-button>
      </b-form-item>
    </b-form-group>
  </b-form>
</template>

<script>
import useMission from './../../composables/useMission'

export default {
  name: 'mission-edit',
  setup() {
    const { state, update } = useMission()

    return { state, update }
  },
}
</script>
