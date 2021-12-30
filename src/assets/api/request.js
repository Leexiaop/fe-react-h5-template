import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.request.use((config) => {
    config.headers.token = window.localStorage.getItem('token');
    return config;
});

axios.interceptors.response.use((response) => {
    const { code, msg } = response.data;
    if (code === 201) {
        window.localStorage.clear();
        Toast(msg);
        window.location.href = '/';
        return false;
    };
    return response;
});

const api = () => {
    return new Promise((resolve, reject) => {
		axios(config).then((res) => {
			if (res) {
				if (config.responseType === 'blob') {
					resolve(res);
				} else {
					resolve(res.data);
				}
			} else {
				reject(new Error());
			}
		}).catch((error) => {
			reject(error);
		});
	});
};

export default api;
