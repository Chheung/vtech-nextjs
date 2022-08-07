import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "http://localhost:3000/";

export const request = async <T>(
  configs: AxiosRequestConfig<any>
): Promise<T> => {
  const response = await axios({ timeout: 15000, ...configs });
  return response.data as T;
};

export const getRequest = async <T>(
  endpoint: string,
  configs?: AxiosRequestConfig<any>
): Promise<T> => {
  const data = await request<T>({
    method: "GET",
    url: baseUrl + endpoint,
    ...configs,
  });

  return data;
};

export const postRequest = async <T>(
  endpoint: string,
  configs?: AxiosRequestConfig<any>
): Promise<T> => {
  const data = await request<T>({
    method: "POST",
    url: baseUrl + endpoint,
    ...configs,
  });

  return data;
};

export const patchRequest = async <T>(
  endpoint: string,
  configs?: AxiosRequestConfig<any>
): Promise<T> => {
  const data = await request<T>({
    method: "PATCH",
    url: baseUrl + endpoint,
    ...configs,
  });

  return data;
};

export const updateRequest = async <T>(
  endpoint: string,
  configs?: AxiosRequestConfig<any>
): Promise<T> => {
  const data = await request<T>({
    method: "UPDATE",
    url: baseUrl + endpoint,
    ...configs,
  });

  return data;
};

export const deleteRequest = async <T>(
  endpoint: string,
  configs?: AxiosRequestConfig<any>
): Promise<T> => {
  const data = await request<T>({
    method: "DELETE",
    url: baseUrl + endpoint,
    ...configs,
  });

  return data;
};
