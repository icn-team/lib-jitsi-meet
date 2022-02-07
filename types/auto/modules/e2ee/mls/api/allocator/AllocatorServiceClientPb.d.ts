/**
 * @fileoverview gRPC-Web generated client stub for allocator
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as allocator_pb from './allocator_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
export declare class AllocatorClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorRequestProxy: grpcWeb.MethodDescriptor<unknown, allocator_pb.Proxy>;
    requestProxy(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<allocator_pb.Proxy>;
    requestProxy(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: allocator_pb.Proxy) => void): grpcWeb.ClientReadableStream<allocator_pb.Proxy>;
    methodDescriptorAddProxy: grpcWeb.MethodDescriptor<allocator_pb.Proxy, unknown>;
    addProxy(request: allocator_pb.Proxy, metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;
    addProxy(request: allocator_pb.Proxy, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
}
