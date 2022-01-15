import { HttpParams } from "@angular/common/http";
import { RequestOptions } from "../models/request-options.model";
import { MAX_PAGE_SIZE } from "./constants";

export abstract class RequestOptionsResolver {

    static resolve(url: string, requestOptions: RequestOptions): string {
        const keys = Object.keys(requestOptions);

        keys.map((key: string) => {
            if (requestOptions[key as keyof RequestOptions]) {
                url = url.replace(`[${key}]`, `${requestOptions[key as keyof RequestOptions]}`);
            }
        })

        return url;
    }

    static resolveParams(params: HttpParams, requestOptions: RequestOptions): HttpParams {
        return params
            .append('limit', `${MAX_PAGE_SIZE}`)
            .append('offset', `${MAX_PAGE_SIZE * ((requestOptions.page ?? 1) - 1) }`);
    }

}