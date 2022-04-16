import { onMounted, reactive } from '@vue/composition-api'
import { request } from '@/api'

export default function useMission() {
  const state = reactive({
    missions: null,
    export: null,
  })

  const list = () => {
    return request('get', '/api/mission/show').then((response) => {
      state.missions = JSON.stringify(response.data)
    })
  }

  onMounted(list)

  const create = () => {
    return request('post', '/api/mission/create').then(() => {
      list()
    })
  }

  const update = () => {
    return request('put', '/api/mission/update', {
      body: state.missions,
    }).then(() => {
      list()
    })
  }

  const htmlExport = () => {
    return request('get', '/api/mission/export/html', state.missions).then(
      (response) => {
        state.export = response.data.body
      }
    )
  }

  return { state, list, create, update, htmlExport }
}
