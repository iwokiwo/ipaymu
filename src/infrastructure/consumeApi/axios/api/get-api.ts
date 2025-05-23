/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import axios from "axios";
import {GetConfig} from "../config/get/get-config";


export const GetApi = async (url: string, data: any): Promise<any> =>{
    return await axios({
        ...GetConfig,
        url: `${GetConfig.baseUrl}/${url}`,
    }).then ( (response) => {
        return response
    }).catch((error) =>{
        return {
            status: "error",
            message : error.message,
        }
    })
}
