import axios from "axios";
import API_URL from "./../../shared/sharedValues.mjs";

export const makeRequest = async (httpMethod, endpoint, httpData = {}, httpParams = {}, responseTimeout) => {
	try {
		const response = await axios({
			method: httpMethod,
			url: API_URL + endpoint,
			data: httpData,
			params: httpParams,
			timeout: responseTimeout,
		});
		return response.data;
	} catch (error) {
		if (error.response) {
			throw new Error(`Error: ${error.response.status} - ${error.response.data}`);
		} else if (error.request) {
			throw new Error("Error: No se pudo obtener una respuesta del servidor");
		} else {
			throw new Error(`Error: ${error.message}`);
		}
	}
};
