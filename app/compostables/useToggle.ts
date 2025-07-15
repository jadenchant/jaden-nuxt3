export function useToggle(
  initialValue: boolean = false,
): [Ref<boolean>, () => void] {
  const state = ref(initialValue);
  const toggle = () => {
    state.value = !state.value;
  };
  return [state, toggle];
}
