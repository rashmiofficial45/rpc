// package: 
// file: a.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as a_pb from "./a_pb";

interface IAddressBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addPerson: IAddressBookServiceService_IAddPerson;
    getPersonByName: IAddressBookServiceService_IGetPersonByName;
}

interface IAddressBookServiceService_IAddPerson extends grpc.MethodDefinition<a_pb.Person, a_pb.Person> {
    path: "/AddressBookService/AddPerson";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a_pb.Person>;
    requestDeserialize: grpc.deserialize<a_pb.Person>;
    responseSerialize: grpc.serialize<a_pb.Person>;
    responseDeserialize: grpc.deserialize<a_pb.Person>;
}
interface IAddressBookServiceService_IGetPersonByName extends grpc.MethodDefinition<a_pb.GetPersonByNameRequest, a_pb.Person> {
    path: "/AddressBookService/GetPersonByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a_pb.GetPersonByNameRequest>;
    requestDeserialize: grpc.deserialize<a_pb.GetPersonByNameRequest>;
    responseSerialize: grpc.serialize<a_pb.Person>;
    responseDeserialize: grpc.deserialize<a_pb.Person>;
}

export const AddressBookServiceService: IAddressBookServiceService;

export interface IAddressBookServiceServer extends grpc.UntypedServiceImplementation {
    addPerson: grpc.handleUnaryCall<a_pb.Person, a_pb.Person>;
    getPersonByName: grpc.handleUnaryCall<a_pb.GetPersonByNameRequest, a_pb.Person>;
}

export interface IAddressBookServiceClient {
    addPerson(request: a_pb.Person, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    addPerson(request: a_pb.Person, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    addPerson(request: a_pb.Person, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    getPersonByName(request: a_pb.GetPersonByNameRequest, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    getPersonByName(request: a_pb.GetPersonByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    getPersonByName(request: a_pb.GetPersonByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
}

export class AddressBookServiceClient extends grpc.Client implements IAddressBookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addPerson(request: a_pb.Person, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    public addPerson(request: a_pb.Person, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    public addPerson(request: a_pb.Person, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    public getPersonByName(request: a_pb.GetPersonByNameRequest, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    public getPersonByName(request: a_pb.GetPersonByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
    public getPersonByName(request: a_pb.GetPersonByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a_pb.Person) => void): grpc.ClientUnaryCall;
}
