import { AddressType } from "./AddressType";

export class AddressDto {
  constructor(
    readonly id: string,
    readonly type: AddressType,

    readonly regionName: string,
    readonly regionCode: number,

    readonly name: string,
    readonly code: string,
  ) {}
}