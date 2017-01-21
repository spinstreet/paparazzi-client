export const START_LOADING = 'START_LOADING';
export const startLoading = (value: number) => {
  return {
    type : START_LOADING
  };
};

export const STOP_LOADING = 'STOP_LOADING';
export const stopLoading = (value: number) => {
  return {
    type : STOP_LOADING
  };
};