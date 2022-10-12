import { onMounted, ref } from 'vue'
import { useRequest } from '@baldeweg/ui'

export function useExport() {
  const { request } = useRequest()

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
