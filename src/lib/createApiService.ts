import api from './axiosClient';

type EntityWithId = { id: string };

export function createApiService<T extends EntityWithId>(basePath: string) {
  return {
    getAll: (): Promise<T[]> => {
      return api.get(`/${basePath}/all?IncludeAllLanguages=true`).then((res) => res.data);
    },

    getAllByLang: (lang: string): Promise<T[]> => {
      return api.get(`/${basePath}/all?Language=${lang}`).then((res) => res.data);
    },

    getById: (id: string): Promise<T> => {
      return api
        .get(`/${basePath}/by-id?id=${id}&IncludeAllLanguages=true`)
        .then((res) => res.data);
    },
  };
}
