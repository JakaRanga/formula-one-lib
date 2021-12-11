import { RequestOptions } from "../models/request-options.model";

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

}