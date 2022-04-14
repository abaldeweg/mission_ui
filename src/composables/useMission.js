import { onMounted, reactive } from '@vue/composition-api'
import { request } from '@/api'

export default function useMission() {
  const state = reactive({
    missions: null,
    export: null,
  })

  const list = () => {
    return request(
      'get',
      '/api/show',
      {},
      {
        name: 'missions.json',
      }
    ).then((response) => {
      state.missions = JSON.stringify(response.data)
    })
  }

  onMounted(list)

  const create = () => {
    return request('post', '/api/create').then(() => {
      list()
    })
  }

  const update = () => {
    return request('put', '/api/update', {
      name: 'missions.json',
      body: state.missions,
    }).then(() => {
      list()
    })
  }

  const htmlExport = () => {
    state.export = null
  }

  return { state, list, create, update, htmlExport }
}
