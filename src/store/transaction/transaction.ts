/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {devtools} from "zustand/middleware";

import {TransactionRepository} from "@/repository/transaction/transaction";
import { TransactionInterface } from "@/store/transaction/transaction.interface";

const TransactionObj = new TransactionRepository()

export const TransactionStores = create<TransactionInterface>()(
    devtools((set,get) => ({
        data: [],
        totalRows: 0,
        dataParam:{
            type: '',
            succeed_date_start: '',
            succeed_date_end: '',

        },

        setDataParams: async(key, value) =>
            await set((state) => ({
                dataParam: {
                    ...state.dataParam,
                    [key]: value,
                },
            })),

        getDataPagination: async (data) => {
            const response = await TransactionObj.fetch(data)
            set({ data: response.result})
            set({totalRows: response.pagination.total_rows})
        },
    })))
