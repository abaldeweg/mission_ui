import { onMounted, ref } from 'vue'
import { request } from '@/api'

export function useMission() {
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
