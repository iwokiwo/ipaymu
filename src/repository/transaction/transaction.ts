/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {GetApi} from "../../infrastructure/consumeApi/axios/api/get/get-api";
import {urlTransaction} from "../../infrastructure/consumeApi/axios/api/url";
import TransactionInterface from "./transaction.interface";


export class TransactionRepository implements TransactionInterface {

    async fetch(data: any) {
        try {
            const datas = await GetApi(urlTransaction, data)
            console.log("datas",datas)
            return  await datas.data.data
        } catch {
            return null;
        }
    }
}
