import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// import store from "@/store";
// import { showToast,closeToast } from 'vant';
// 根据环境不同引入不同api地址
// import { baseApi } from "@/config";

// create an axios instance
const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASEURL, // url = base api url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000, // request timeout
});

// axios实例拦截请求
service.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// axios实例拦截响应
service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.status === 200) {
			return response;
		}
		return response;
	},
	(error) => {
		return Promise.reject(error.response);
	}
);
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
	const conf = config;
	return new Promise((resolve) => {
		service.request<any, AxiosResponse<IResponse>>(conf).then((res: AxiosResponse<IResponse>) => {
			const {
				data: { result },
			} = res;
			resolve(result as T);
		});
	});
};

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
	return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
	return request({ ...config, method: 'POST' });
}

export default request;

export type { AxiosInstance, AxiosResponse };

interface IResponse<T = any> {
	code: number | string;
	result: T;
	message: string;
	status: string | number;
}
