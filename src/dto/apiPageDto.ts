export class ApiPageDto<T> {
    constructor(
        readonly list: T[],
        readonly totalPage: number,
        readonly currentPage: number,
        readonly size: number,
    ) { }
}