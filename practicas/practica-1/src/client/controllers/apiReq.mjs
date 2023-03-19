import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:4855";

export const axiosReq = async (httpMethod, endpoint, httpData = {}, httpParams = {}, responseTimeout) => {
	try {
		const response = await axios({
			method: httpMethod,
			url: /* API_URL + */ endpoint,
			data: httpData,
			params: httpParams,
			timeout: responseTimeout
		});
		return response.data;
	} catch (error) {
		if (error.response) {
			throw new Error(`Error: ${error.response.status} - ${error.response.data}`);
		} else if (error.request) {
			throw new Error(`No se pudo obtener una respuesta del servidor - ${error.message}`);
		} else {
			throw new Error(`${error.message}`);
		}
	}
};