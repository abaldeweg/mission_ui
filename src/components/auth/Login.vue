<template>
  <b-form @submit.prevent="$emit('login', { username, password })">
    <!-- username -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="username">{{ $t('username') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="text"
          id="username"
          :placeholder="$t('username')"
          v-model="username"
          autofocus
        />
      </b-form-item>
    </b-form-group>

    <!-- password -->
    <b-form-group>
      <b-form-item>
        <b-form-label for="password">{{ $t('password') }}</b-form-label>
      </b-form-item>
      <b-form-item>
        <b-form-input
          type="password"
          id="password"
          :placeholder="$t('password')"
          v-model="password"
        />
      </b-form-item>
    </b-form-group>

    <!-- buttons -->
    <b-form-group buttons>
      <b-form-item>
        <b-button design="primary_wide" v-if="!isLoggingIn">
          {{ $t('login') }}
        </b-button>
        <b-button design="outline_wide" v-if="isLoggingIn">
          <b-spinner size="s" :style="{ margin: 'auto' }" />
        </b-button>
      </b-form-item>
    </b-form-group>

    <b-toast type="error" ref="wrongCredentials">
      <p>{{ $t('wrongCredentials') }}</p>
    </b-toast>
  </b-form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'auth-login',
  props: {
    isLoggingIn: Boolean,
  },
  setup() {
    const username = ref(null)
    const password = ref(null)

    const wrongCredentials = ref(null)

    return { wrongCredentials, username, password }
  },
}
</script>
