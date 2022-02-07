import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class KeyPackageRef extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): KeyPackageRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyPackageRef.AsObject;
  static toObject(includeInstance: boolean, msg: KeyPackageRef): KeyPackageRef.AsObject;
  static serializeBinaryToWriter(message: KeyPackageRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyPackageRef;
  static deserializeBinaryFromReader(message: KeyPackageRef, reader: jspb.BinaryReader): KeyPackageRef;
}

export namespace KeyPackageRef {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class LeafNodeRef extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): LeafNodeRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeafNodeRef.AsObject;
  static toObject(includeInstance: boolean, msg: LeafNodeRef): LeafNodeRef.AsObject;
  static serializeBinaryToWriter(message: LeafNodeRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeafNodeRef;
  static deserializeBinaryFromReader(message: LeafNodeRef, reader: jspb.BinaryReader): LeafNodeRef;
}

export namespace LeafNodeRef {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class LeafIndex extends jspb.Message {
  getValue(): number;
  setValue(value: number): LeafIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeafIndex.AsObject;
  static toObject(includeInstance: boolean, msg: LeafIndex): LeafIndex.AsObject;
  static serializeBinaryToWriter(message: LeafIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeafIndex;
  static deserializeBinaryFromReader(message: LeafIndex, reader: jspb.BinaryReader): LeafIndex;
}

export namespace LeafIndex {
  export type AsObject = {
    value: number,
  }
}

export class GroupID extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): GroupID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupID.AsObject;
  static toObject(includeInstance: boolean, msg: GroupID): GroupID.AsObject;
  static serializeBinaryToWriter(message: GroupID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupID;
  static deserializeBinaryFromReader(message: GroupID, reader: jspb.BinaryReader): GroupID;
}

export namespace GroupID {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Epoch extends jspb.Message {
  getValue(): number;
  setValue(value: number): Epoch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Epoch.AsObject;
  static toObject(includeInstance: boolean, msg: Epoch): Epoch.AsObject;
  static serializeBinaryToWriter(message: Epoch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Epoch;
  static deserializeBinaryFromReader(message: Epoch, reader: jspb.BinaryReader): Epoch;
}

export namespace Epoch {
  export type AsObject = {
    value: number,
  }
}

export class CipherSuite extends jspb.Message {
  getValue(): CipherSuite.ID;
  setValue(value: CipherSuite.ID): CipherSuite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CipherSuite.AsObject;
  static toObject(includeInstance: boolean, msg: CipherSuite): CipherSuite.AsObject;
  static serializeBinaryToWriter(message: CipherSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CipherSuite;
  static deserializeBinaryFromReader(message: CipherSuite, reader: jspb.BinaryReader): CipherSuite;
}

export namespace CipherSuite {
  export type AsObject = {
    value: CipherSuite.ID,
  }

  export enum ID { 
    UNKNOWN = 0,
    X25519_AES128GCM_SHA256_ED25519 = 1,
    P256_AES128GCM_SHA256_P256 = 2,
    X25519_CHACHA20POLY1305_SHA256_ED25519 = 3,
    X448_AES256GCM_SHA512_ED448 = 4,
    P521_AES256GCM_SHA512_P521 = 5,
    X448_CHACHA20POLY1305_SHA512_ED448 = 6,
    P384_AES256GCM_SHA384_P384 = 7,
  }
}

export class Roster extends jspb.Message {
  getValuesList(): Array<LeafNodeRef>;
  setValuesList(value: Array<LeafNodeRef>): Roster;
  clearValuesList(): Roster;
  addValues(value?: LeafNodeRef, index?: number): LeafNodeRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Roster.AsObject;
  static toObject(includeInstance: boolean, msg: Roster): Roster.AsObject;
  static serializeBinaryToWriter(message: Roster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Roster;
  static deserializeBinaryFromReader(message: Roster, reader: jspb.BinaryReader): Roster;
}

export namespace Roster {
  export type AsObject = {
    valuesList: Array<LeafNodeRef.AsObject>,
  }
}

export class AuthenticationSecret extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): AuthenticationSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationSecret.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationSecret): AuthenticationSecret.AsObject;
  static serializeBinaryToWriter(message: AuthenticationSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationSecret;
  static deserializeBinaryFromReader(message: AuthenticationSecret, reader: jspb.BinaryReader): AuthenticationSecret;
}

export namespace AuthenticationSecret {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class ExporterSecret extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): ExporterSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExporterSecret.AsObject;
  static toObject(includeInstance: boolean, msg: ExporterSecret): ExporterSecret.AsObject;
  static serializeBinaryToWriter(message: ExporterSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExporterSecret;
  static deserializeBinaryFromReader(message: ExporterSecret, reader: jspb.BinaryReader): ExporterSecret;
}

export namespace ExporterSecret {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class ExporterSecretRequest extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): ExporterSecretRequest;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): ExporterSecretRequest;

  getSize(): number;
  setSize(value: number): ExporterSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExporterSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExporterSecretRequest): ExporterSecretRequest.AsObject;
  static serializeBinaryToWriter(message: ExporterSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExporterSecretRequest;
  static deserializeBinaryFromReader(message: ExporterSecretRequest, reader: jspb.BinaryReader): ExporterSecretRequest;
}

export namespace ExporterSecretRequest {
  export type AsObject = {
    label: string,
    context: Uint8Array | string,
    size: number,
  }
}

export class Message extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

