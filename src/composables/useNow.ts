import type { Ref } from 'vue'
import { shallowRef } from 'vue'
import { useInterval } from '@/composables/useInterval'

export const useNow = (): Ref<Date> => {
    const now = shallowRef<Date>(new Date())

    useInterval(() => {
        now.value = new Date()
    }, 1000)

    return now
}
