import api from './axiosClient';

type EntityWithId = { id: string };

export function createApiService<T extends EntityWithId>(basePath: string) {
  return {
    getAll: (): Promise<T[]> =>
      api.get(`/${basePath}/all?IncludeAllLanguages=true`).then((res) => res.data),

    getAllByLang: (lang: string): Promise<T[]> =>
      api.get(`/${basePath}/all?Language=${lang}`).then((res) => res.data),
    getById: (id: string): Promise<T> =>
      api.get(`/${basePath}/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data),

    getByUrlAndLang: (slug: string, lang: string): Promise<T> =>
      api.get(`/${basePath}/by-url?Url=${slug}&Language=${lang}`).then((res) => res.data),

    create: (data: Omit<T, 'id'>): Promise<T> =>
      api.post(`/${basePath}/add`, data).then((res) => res.data),

    update: (data: T): Promise<T> => api.put(`/${basePath}/update`, data).then((res) => res.data),

    delete: (id: string): Promise<any> => api.delete(`/${basePath}/${id}`).then((res) => res.data),
  };
}
