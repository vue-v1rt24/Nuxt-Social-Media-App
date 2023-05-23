export const useFetchApi = async <T>(url: RequestInfo, options: any = {}): Promise<T> => {
  const { useAuthToken } = useAuth();

  return await $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useAuthToken().value}`,
    },
  });
};
