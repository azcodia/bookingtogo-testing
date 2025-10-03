import api from "./api";

class ApiClient {
  async get<T>(endpoint: string, params?: Record<string, unknown>): Promise<T> {
    return (await api.get(endpoint, { params })) as T;
  }

  async post<T, B>(endpoint: string, body: B): Promise<T> {
    return (await api.post(endpoint, body)) as T;
  }

  async put<T, B>(endpoint: string, body: B): Promise<T> {
    return (await api.put(endpoint, body)) as T;
  }

  async delete<T>(endpoint: string): Promise<T> {
    return (await api.delete(endpoint)) as T;
  }

  async upload<T>(
    endpoint: string,
    file: File,
    extraData?: Record<string, unknown>
  ): Promise<T> {
    const formData = new FormData();
    formData.append("file", file);

    if (extraData) {
      Object.keys(extraData).forEach((key) => {
        const value = extraData[key];
        formData.append(
          key,
          value === undefined || value === null ? "" : String(value)
        );
      });
    }

    return (await api.post(endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })) as T;
  }
}

export const apiClient = new ApiClient();
