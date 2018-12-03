import { useInput } from './useInput';

export const useForm = initState => {
  if (typeof initState !== 'object') {
    const obj = useInput(initState);
    return [obj.value, obj];
  }

  const state = {};
  const call = {};

  for (let key in initState) {
    const obj = useInput(initState[key]);
    state[key] = obj.value;
    call[key] = obj;
  }

  return [state, call];
};
