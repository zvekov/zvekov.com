import {computed, ref} from "vue";
import type {ComputedRef} from "vue";

export const useState = <T>(
    initialValue: T
): [ComputedRef<T>, (value: T) => void] => {
    const refValue = ref<T>(initialValue);
    const mutationFn = (v: T) => (refValue.value = v);
    // @ts-ignore
    const immutableData = computed<T>(() => refValue.value);

    return [immutableData, mutationFn];
};