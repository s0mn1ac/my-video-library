/* Angular */
import { HttpHeaders } from "@angular/common/http";

export interface IParams {
    url: string;
    body?: any;
    params?: any;
    callback: any;
    loading?: boolean;
    error?: boolean;
    headers?: HttpHeaders;
    responseType?: any;
    result?: any;
}
