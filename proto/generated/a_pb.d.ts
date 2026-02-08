// package: 
// file: a.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Person extends jspb.Message { 
    getName(): string;
    setName(value: string): Person;
    getAge(): number;
    setAge(value: number): Person;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
    export type AsObject = {
        name: string,
        age: number,
    }
}

export class GetPersonByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetPersonByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPersonByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPersonByNameRequest): GetPersonByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPersonByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPersonByNameRequest;
    static deserializeBinaryFromReader(message: GetPersonByNameRequest, reader: jspb.BinaryReader): GetPersonByNameRequest;
}

export namespace GetPersonByNameRequest {
    export type AsObject = {
        name: string,
    }
}
