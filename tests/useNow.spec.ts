import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useNow } from '../src/composables/useNow'
import { isRef, toValue } from 'vue'

describe('useNow', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    it('should should return a reactive date object', () => {
        const now = useNow()

        expect(isRef(now)).toBe(true)
        expect(toValue(now)).toBeInstanceOf(Date)
    })

    it('should always be accurate to the second', () => {
        const now = useNow()
        const currentDate = new Date()

        expect(toValue(now).getTime()).toBe(currentDate.getTime())

        vi.advanceTimersByTime(1000)

        expect(toValue(now).getTime()).toBe(currentDate.getTime() + 1000)
    })
})
