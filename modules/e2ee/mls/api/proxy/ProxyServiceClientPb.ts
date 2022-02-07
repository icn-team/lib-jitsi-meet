/**
 * @fileoverview gRPC-Web generated client stub for proxy
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proxy_pb from './proxy_pb';


export class ProxyClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAdd = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/Add',
    grpcWeb.MethodType.UNARY,
    proxy_pb.KeyPackageRef,
    google_protobuf_empty_pb.Empty,
    (request: proxy_pb.KeyPackageRef) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  add(
    request: proxy_pb.KeyPackageRef,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  add(
    request: proxy_pb.KeyPackageRef,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  add(
    request: proxy_pb.KeyPackageRef,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/Add',
        request,
        metadata || {},
        this.methodDescriptorAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/Add',
    request,
    metadata || {},
    this.methodDescriptorAdd);
  }

  methodDescriptorUpdate = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/Update',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/Update',
        request,
        metadata || {},
        this.methodDescriptorUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/Update',
    request,
    metadata || {},
    this.methodDescriptorUpdate);
  }

  methodDescriptorRemove = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/Remove',
    grpcWeb.MethodType.UNARY,
    proxy_pb.LeafNodeRef,
    google_protobuf_empty_pb.Empty,
    (request: proxy_pb.LeafNodeRef) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  remove(
    request: proxy_pb.LeafNodeRef,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  remove(
    request: proxy_pb.LeafNodeRef,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  remove(
    request: proxy_pb.LeafNodeRef,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/Remove',
        request,
        metadata || {},
        this.methodDescriptorRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/Remove',
    request,
    metadata || {},
    this.methodDescriptorRemove);
  }

  methodDescriptorGetLeafNodeRef = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetLeafNodeRef',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.LeafNodeRef,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.LeafNodeRef.deserializeBinary
  );

  getLeafNodeRef(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.LeafNodeRef>;

  getLeafNodeRef(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.LeafNodeRef) => void): grpcWeb.ClientReadableStream<proxy_pb.LeafNodeRef>;

  getLeafNodeRef(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.LeafNodeRef) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetLeafNodeRef',
        request,
        metadata || {},
        this.methodDescriptorGetLeafNodeRef,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetLeafNodeRef',
    request,
    metadata || {},
    this.methodDescriptorGetLeafNodeRef);
  }

  methodDescriptorGetLeafIndex = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetLeafIndex',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.LeafIndex,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.LeafIndex.deserializeBinary
  );

  getLeafIndex(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.LeafIndex>;

  getLeafIndex(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.LeafIndex) => void): grpcWeb.ClientReadableStream<proxy_pb.LeafIndex>;

  getLeafIndex(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.LeafIndex) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetLeafIndex',
        request,
        metadata || {},
        this.methodDescriptorGetLeafIndex,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetLeafIndex',
    request,
    metadata || {},
    this.methodDescriptorGetLeafIndex);
  }

  methodDescriptorGetGroupID = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetGroupID',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.GroupID,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.GroupID.deserializeBinary
  );

  getGroupID(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.GroupID>;

  getGroupID(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.GroupID) => void): grpcWeb.ClientReadableStream<proxy_pb.GroupID>;

  getGroupID(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.GroupID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetGroupID',
        request,
        metadata || {},
        this.methodDescriptorGetGroupID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetGroupID',
    request,
    metadata || {},
    this.methodDescriptorGetGroupID);
  }

  methodDescriptorGetEpoch = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetEpoch',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.Epoch,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.Epoch.deserializeBinary
  );

  getEpoch(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Epoch>;

  getEpoch(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.Epoch) => void): grpcWeb.ClientReadableStream<proxy_pb.Epoch>;

  getEpoch(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.Epoch) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetEpoch',
        request,
        metadata || {},
        this.methodDescriptorGetEpoch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetEpoch',
    request,
    metadata || {},
    this.methodDescriptorGetEpoch);
  }

  methodDescriptorGetCipherSuite = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetCipherSuite',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.CipherSuite,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.CipherSuite.deserializeBinary
  );

  getCipherSuite(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.CipherSuite>;

  getCipherSuite(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.CipherSuite) => void): grpcWeb.ClientReadableStream<proxy_pb.CipherSuite>;

  getCipherSuite(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.CipherSuite) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetCipherSuite',
        request,
        metadata || {},
        this.methodDescriptorGetCipherSuite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetCipherSuite',
    request,
    metadata || {},
    this.methodDescriptorGetCipherSuite);
  }

  methodDescriptorGetRoster = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetRoster',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.Roster,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.Roster.deserializeBinary
  );

  getRoster(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Roster>;

  getRoster(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.Roster) => void): grpcWeb.ClientReadableStream<proxy_pb.Roster>;

  getRoster(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.Roster) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetRoster',
        request,
        metadata || {},
        this.methodDescriptorGetRoster,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetRoster',
    request,
    metadata || {},
    this.methodDescriptorGetRoster);
  }

  methodDescriptorGetAuthenticationSecret = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetAuthenticationSecret',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proxy_pb.AuthenticationSecret,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proxy_pb.AuthenticationSecret.deserializeBinary
  );

  getAuthenticationSecret(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.AuthenticationSecret>;

  getAuthenticationSecret(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.AuthenticationSecret) => void): grpcWeb.ClientReadableStream<proxy_pb.AuthenticationSecret>;

  getAuthenticationSecret(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.AuthenticationSecret) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetAuthenticationSecret',
        request,
        metadata || {},
        this.methodDescriptorGetAuthenticationSecret,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetAuthenticationSecret',
    request,
    metadata || {},
    this.methodDescriptorGetAuthenticationSecret);
  }

  methodDescriptorGetExporterSecret = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/GetExporterSecret',
    grpcWeb.MethodType.UNARY,
    proxy_pb.ExporterSecretRequest,
    proxy_pb.ExporterSecret,
    (request: proxy_pb.ExporterSecretRequest) => {
      return request.serializeBinary();
    },
    proxy_pb.ExporterSecret.deserializeBinary
  );

  getExporterSecret(
    request: proxy_pb.ExporterSecretRequest,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.ExporterSecret>;

  getExporterSecret(
    request: proxy_pb.ExporterSecretRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.ExporterSecret) => void): grpcWeb.ClientReadableStream<proxy_pb.ExporterSecret>;

  getExporterSecret(
    request: proxy_pb.ExporterSecretRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.ExporterSecret) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/GetExporterSecret',
        request,
        metadata || {},
        this.methodDescriptorGetExporterSecret,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/GetExporterSecret',
    request,
    metadata || {},
    this.methodDescriptorGetExporterSecret);
  }

  methodDescriptorProtect = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/Protect',
    grpcWeb.MethodType.UNARY,
    proxy_pb.Message,
    proxy_pb.Message,
    (request: proxy_pb.Message) => {
      return request.serializeBinary();
    },
    proxy_pb.Message.deserializeBinary
  );

  protect(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Message>;

  protect(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.Message) => void): grpcWeb.ClientReadableStream<proxy_pb.Message>;

  protect(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.Message) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/Protect',
        request,
        metadata || {},
        this.methodDescriptorProtect,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/Protect',
    request,
    metadata || {},
    this.methodDescriptorProtect);
  }

  methodDescriptorUnprotect = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/Unprotect',
    grpcWeb.MethodType.UNARY,
    proxy_pb.Message,
    proxy_pb.Message,
    (request: proxy_pb.Message) => {
      return request.serializeBinary();
    },
    proxy_pb.Message.deserializeBinary
  );

  unprotect(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Message>;

  unprotect(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.Message) => void): grpcWeb.ClientReadableStream<proxy_pb.Message>;

  unprotect(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.Message) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/Unprotect',
        request,
        metadata || {},
        this.methodDescriptorUnprotect,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/Unprotect',
    request,
    metadata || {},
    this.methodDescriptorUnprotect);
  }

  methodDescriptorHash = new grpcWeb.MethodDescriptor(
    '/proxy.Proxy/Hash',
    grpcWeb.MethodType.UNARY,
    proxy_pb.Message,
    proxy_pb.Message,
    (request: proxy_pb.Message) => {
      return request.serializeBinary();
    },
    proxy_pb.Message.deserializeBinary
  );

  hash(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Message>;

  hash(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proxy_pb.Message) => void): grpcWeb.ClientReadableStream<proxy_pb.Message>;

  hash(
    request: proxy_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proxy_pb.Message) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proxy.Proxy/Hash',
        request,
        metadata || {},
        this.methodDescriptorHash,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proxy.Proxy/Hash',
    request,
    metadata || {},
    this.methodDescriptorHash);
  }

}

