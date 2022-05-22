import { onMounted, ref } from 'vue'
import { request } from '@/api'

export function useExport() {
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
