import { onMounted, ref } from 'vue'
import { useRequest } from '@baldeweg/ui'
import Cookies from 'js-cookie'

export function useExport() {
  const { config, setAuthHeader, request } = useRequest()

  config.value.baseURL = import.meta.env.VUE_APP_API
  setAuthHeader(Cookies.get('token'))

  const content = ref(null)
  const isLoading = ref(false)

  const show = () => {
    isLoading.value = true

    return request('get', '/api/mission/export/html').then((res) => {
      content.value = res.data.body
      isLoading.value = false
    })
  }

  onMounted(show)

  return { content, isLoading }
}
