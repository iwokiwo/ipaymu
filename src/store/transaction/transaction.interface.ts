/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export interface TransactionInterface {

    data:Array<any>;
    totalRows: number
    // type?: string
    // succeed_date_start?: string
    // succeed_date_end?: string
    dataParam: {
        type?: string,
        succeed_date_start?: string,
        succeed_date_end?: string,
    }

    getDataPagination: (data: any) => void;
    setDataParams: (key: any, value: any) => void;
}
