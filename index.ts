import * as grpc from "@grpc/grpc-js"
import {
  AddressBookServiceService,
  IAddressBookServiceServer,
} from "./proto/generated/a_grpc_pb"
import { Person, GetPersonByNameRequest } from "./proto/generated/a_pb"
import { Status } from "@grpc/grpc-js/build/src/constants"

const PERSONS: { name: string; age: number }[] = [
  { name: "harkirat", age: 45 },
  { name: "raman", age: 45 },
]

const server = new grpc.Server()

/**
 * 👇 This is the key line that fixes all your TS7006 errors
 */
const handlers: IAddressBookServiceServer = {
  addPerson(
    call: grpc.ServerUnaryCall<Person, Person>,
    callback: grpc.sendUnaryData<Person>,
  ) {
    const incoming = call.request.toObject()

    PERSONS.push({
      name: incoming.name,
      age: incoming.age,
    })

    const res = new Person()
    res.setName(incoming.name)
    res.setAge(incoming.age)

    callback(null, res)
  },

  getPersonByName(
    call: grpc.ServerUnaryCall<GetPersonByNameRequest, Person>,
    callback: grpc.sendUnaryData<Person>,
  ) {
    const name = call.request.getName()
    const found = PERSONS.find((p) => p.name === name)

    if (!found) {
      callback({ code: Status.NOT_FOUND, details: "not found" }, null)
      return
    }

    const res = new Person()
    res.setName(found.name)
    res.setAge(found.age)

    callback(null, res)
  },
}

server.addService(AddressBookServiceService, handlers)

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("🚀 gRPC Server running on 50051")
    server.start()
  },
)
