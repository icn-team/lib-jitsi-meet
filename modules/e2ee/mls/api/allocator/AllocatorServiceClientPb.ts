/**
 * @fileoverview gRPC-Web generated client stub for allocator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as allocator_pb from './allocator_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AllocatorClient {
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

  methodDescriptorRequestProxy = new grpcWeb.MethodDescriptor(
    '/allocator.Allocator/RequestProxy',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    allocator_pb.Proxy,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    allocator_pb.Proxy.deserializeBinary
  );

  requestProxy(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<allocator_pb.Proxy>;

  requestProxy(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: allocator_pb.Proxy) => void): grpcWeb.ClientReadableStream<allocator_pb.Proxy>;

  requestProxy(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: allocator_pb.Proxy) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/allocator.Allocator/RequestProxy',
        request,
        metadata || {},
        this.methodDescriptorRequestProxy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/allocator.Allocator/RequestProxy',
    request,
    metadata || {},
    this.methodDescriptorRequestProxy);
  }

  methodDescriptorAddProxy = new grpcWeb.MethodDescriptor(
    '/allocator.Allocator/AddProxy',
    grpcWeb.MethodType.UNARY,
    allocator_pb.Proxy,
    google_protobuf_empty_pb.Empty,
    (request: allocator_pb.Proxy) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addProxy(
    request: allocator_pb.Proxy,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addProxy(
    request: allocator_pb.Proxy,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addProxy(
    request: allocator_pb.Proxy,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/allocator.Allocator/AddProxy',
        request,
        metadata || {},
        this.methodDescriptorAddProxy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/allocator.Allocator/AddProxy',
    request,
    metadata || {},
    this.methodDescriptorAddProxy);
  }

}

