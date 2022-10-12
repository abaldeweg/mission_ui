<script setup>
import { watch } from 'vue'
import { useLocale, useColorScheme, useRequest } from '@baldeweg/ui'
import { useGCPAuth } from '@/composables/useGCPAuth.js'
import AuthLogin from '@/components/auth/Login.vue'

const { config, setAuthHeader } = useRequest()
config.value.baseURL = import.meta.env.VUE_APP_API

const firebaseConfig = {
  apiKey: import.meta.env.VUE_APP_API_KEY,
  authDomain: import.meta.env.VUE_APP_AUTH_DOMAIN,
}

useLocale()
useColorScheme()

const {
  logout,
  token,
  isAuthenticated,
  user,
  login,
  username,
  password,
  isLoggingIn,
} = useGCPAuth(firebaseConfig)

const handleLogin = (event) => {
  username.value = event.username
  password.value = event.password

  login()
}

watch(
  () => token.value,
  () => {
    setAuthHeader(token.value)
  }
)
</script>

<template>
  <BApp>
    <BMasthead>
      <BMastheadItem position="center">
        <RouterLink :to="{ name: 'mission' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 200 200"
            class="logo"
          >
            <path
              d="M 100 10 A 90 90 0 0 0 10 100 A 90 90 0 0 0 100 190 A 90 90 0 0 0 190 100 A 90 90 0 0 0 100 10 z M 40 60 L 45 60 L 95 60 L 100 60 L 100 95 L 95 95 L 45 95 L 40 95 L 40 60 z M 110 60 L 120 60 L 120 105 L 110 105 L 110 60 z M 130 60 L 140 60 L 140 105 L 130 105 L 130 60 z M 150 60 L 160 60 L 160 105 L 150 105 L 150 60 z M 45 65 L 45 90 L 95 90 L 95 65 L 45 65 z M 55 100 L 85 100 L 85 105 L 55 105 L 55 100 z M 35 110 L 40 110 L 165 110 L 165 155 L 160 155 L 160 115 L 40 115 L 40 155 L 35 155 L 35 115 L 35 110 z "
            />
          </svg>
        </RouterLink>
      </BMastheadItem>
    </BMasthead>

    <BContainer size="m" v-if="isAuthenticated">
      <BTabs>
        <BTabsLink>
          <RouterLink :to="{ name: 'mission' }">
            {{ $t('missions') }}
          </RouterLink>
        </BTabsLink>
        <BTabsLink>
          <RouterLink :to="{ name: 'export' }">
            {{ $t('export') }}
          </RouterLink>
        </BTabsLink>
        <BTabsLink>
          <RouterLink :to="{ name: 'profile' }">
            {{ $t('settings') }}
          </RouterLink>
        </BTabsLink>
        <BTabsLink>
          <a href="/logout" @click.prevent="logout">
            {{ $t('logout') }}
          </a>
        </BTabsLink>
      </BTabs>
    </BContainer>

    <RouterView :auth="user" v-if="isAuthenticated" />

    <BContainer size="s" v-if="!isAuthenticated">
      <h1>{{ $t('login') }}</h1>
      <AuthLogin @login="handleLogin" :isLoggingIn="isLoggingIn" />
    </BContainer>
  </BApp>
</template>

<style scoped>
.logo {
  fill: var(--color-primary-10);
}
</style>
