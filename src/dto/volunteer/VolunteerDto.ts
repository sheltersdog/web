import { AddressDto } from "../address/AddressDto";

export class VolunteerDto {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly shelterName: string,
    readonly isShort: boolean,
    readonly categories: string[],
    readonly address: AddressDto | undefined = undefined,
    readonly detailAddress: string = '',
    readonly startDate: string,
    readonly endDate: string,
    readonly day: string = "",
    readonly time: string = "",
    readonly content: string = "",
    readonly url: string = "",
  ) {}
}