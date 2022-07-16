import { onMounted, ref } from 'vue'
import { useRequest } from '@baldeweg/ui'
import Cookies from 'js-cookie'

export function useMission() {
  const { config, setAuthHeader, request } = useRequest()

  config.value.baseURL = import.meta.env.VUE_APP_API
  setAuthHeader(Cookies.get('token'))

  const missions = ref(null)
  const isLoading = ref(false)

  const list = () => {
    isLoading.value = true

    return request('get', '/api/mission/show').then((response) => {
      missions.value = JSON.stringify(response.data)
      isLoading.value = false
    })
  }

  onMounted(list)

  const create = () => {
    return request('post', '/api/mission/create')
  }

  const update = () => {
    return request('put', '/api/mission/update', {
      body: missions.value,
    })
  }

  return { missions, isLoading, create, update }
}
