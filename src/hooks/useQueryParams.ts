import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation"

export const useQueryParams = <T>() => {
    const params = useSearchParams();
    return {
        ...params,
        get: (key: keyof T): string | null => params.get(typeof key === 'string' ? key : `${key as number}`) as string | null,
    } as ReadonlyURLSearchParams & {get: (key: keyof T) => string | null}
}