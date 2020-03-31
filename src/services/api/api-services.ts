import { apiConstants } from "../../constants/api.constants";
import { Beer } from "../../models/Beer";
import Axios, { AxiosResponse, AxiosError } from "axios";

const getAllBeers = (): Promise<Beer[]> => {
  return new Promise((resolve, reject) => {
    Axios.get(apiConstants.URL_ALL).then(
      (res: AxiosResponse<any>) => {
        resolve(res.data as Beer[]);
      },
      (e: AxiosError) => {
        let response = "Gestion d'erreur à venir :)";
        console.log(e);
        reject(response);
      }
    );
  });
};

export default {
  getAllBeers
};
