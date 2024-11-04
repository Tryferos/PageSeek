import 'server only'

export type NextPageProps<T = undefined, K = undefined> = {
    searchParams: Promise<T>;
    params: Promise<K>;
}