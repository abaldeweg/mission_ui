import { onMounted, reactive } from '@vue/composition-api'
import { request } from '@/api'

export default function useExport() {
  const state = reactive({
    export: null,
    isLoading: false,
  })

  const html = () => {
    state.isLoading = true

    return request('get', '/api/mission/export/html', state.missions)
      .then((response) => {
        state.export = response.data.body
      })
      .finally(() => {
        state.isLoading = false
      })
  }

  onMounted(html)

  return { state, html }
}
