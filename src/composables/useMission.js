import { onMounted, reactive } from '@vue/composition-api'
import { request } from '@/api'

export default function useMission() {
  const state = reactive({
    missions: null,
    isLoading: false,
  })

  const list = () => {
    state.isLoading = true

    return request('get', '/api/mission/show')
      .then((response) => {
        state.missions = JSON.stringify(response.data)
      })
      .finally(() => {
        state.isLoading = false
      })
  }

  onMounted(list)

  const create = () => {
    return request('post', '/api/mission/create')
  }

  const update = () => {
    return request('put', '/api/mission/update', {
      body: state.missions,
    })
  }

  return { state, create, update }
}
