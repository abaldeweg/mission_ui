<template>
  <section>
    <b-form @submit.prevent="mission.update">
      <b-form-group>
        <b-form-item>
          <b-form-label for="missions">{{ $t('missions') }}</b-form-label>
        </b-form-item>
        <b-form-item>
          <b-form-textarea
            id="missions"
            :rows="20"
            v-model="mission.state.missions"
          />
        </b-form-item>
      </b-form-group>

      <b-form-group buttons>
        <b-form-item>
          <b-button design="primary_wide">{{ $t('save') }}</b-button>
        </b-form-item>
      </b-form-group>
    </b-form>
  </section>
</template>

<script>
import useMission from '@/composables/useMission'

export default {
  name: 'mission-edit',
  setup() {
    const mission = useMission()

    return { mission }
  },
}
</script>
