/**
 * @fileoverview gRPC-Web generated client stub for proxy
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proxy_pb from './proxy_pb';
export declare class ProxyClient {
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
    methodDescriptorAdd: grpcWeb.MethodDescriptor<proxy_pb.KeyPackageRef, unknown>;
    add(request: proxy_pb.KeyPackageRef, metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;
    add(request: proxy_pb.KeyPackageRef, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
    methodDescriptorUpdate: grpcWeb.MethodDescriptor<unknown, unknown>;
    update(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;
    update(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
    methodDescriptorRemove: grpcWeb.MethodDescriptor<proxy_pb.LeafNodeRef, unknown>;
    remove(request: proxy_pb.LeafNodeRef, metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;
    remove(request: proxy_pb.LeafNodeRef, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
    methodDescriptorGetLeafNodeRef: grpcWeb.MethodDescriptor<unknown, proxy_pb.LeafNodeRef>;
    getLeafNodeRef(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.LeafNodeRef>;
    getLeafNodeRef(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.LeafNodeRef) => void): grpcWeb.ClientReadableStream<proxy_pb.LeafNodeRef>;
    methodDescriptorGetLeafIndex: grpcWeb.MethodDescriptor<unknown, proxy_pb.LeafIndex>;
    getLeafIndex(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.LeafIndex>;
    getLeafIndex(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.LeafIndex) => void): grpcWeb.ClientReadableStream<proxy_pb.LeafIndex>;
    methodDescriptorGetGroupID: grpcWeb.MethodDescriptor<unknown, proxy_pb.GroupID>;
    getGroupID(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.GroupID>;
    getGroupID(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.GroupID) => void): grpcWeb.ClientReadableStream<proxy_pb.GroupID>;
    methodDescriptorGetEpoch: grpcWeb.MethodDescriptor<unknown, proxy_pb.Epoch>;
    getEpoch(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Epoch>;
    getEpoch(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.Epoch) => void): grpcWeb.ClientReadableStream<proxy_pb.Epoch>;
    methodDescriptorGetCipherSuite: grpcWeb.MethodDescriptor<unknown, proxy_pb.CipherSuite>;
    getCipherSuite(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.CipherSuite>;
    getCipherSuite(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.CipherSuite) => void): grpcWeb.ClientReadableStream<proxy_pb.CipherSuite>;
    methodDescriptorGetRoster: grpcWeb.MethodDescriptor<unknown, proxy_pb.Roster>;
    getRoster(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Roster>;
    getRoster(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.Roster) => void): grpcWeb.ClientReadableStream<proxy_pb.Roster>;
    methodDescriptorGetAuthenticationSecret: grpcWeb.MethodDescriptor<unknown, proxy_pb.AuthenticationSecret>;
    getAuthenticationSecret(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.AuthenticationSecret>;
    getAuthenticationSecret(request: google_protobuf_empty_pb.Empty, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.AuthenticationSecret) => void): grpcWeb.ClientReadableStream<proxy_pb.AuthenticationSecret>;
    methodDescriptorGetExporterSecret: grpcWeb.MethodDescriptor<proxy_pb.ExporterSecretRequest, proxy_pb.ExporterSecret>;
    getExporterSecret(request: proxy_pb.ExporterSecretRequest, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.ExporterSecret>;
    getExporterSecret(request: proxy_pb.ExporterSecretRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.ExporterSecret) => void): grpcWeb.ClientReadableStream<proxy_pb.ExporterSecret>;
    methodDescriptorProtect: grpcWeb.MethodDescriptor<proxy_pb.Message, proxy_pb.Message>;
    protect(request: proxy_pb.Message, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Message>;
    protect(request: proxy_pb.Message, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.Message) => void): grpcWeb.ClientReadableStream<proxy_pb.Message>;
    methodDescriptorUnprotect: grpcWeb.MethodDescriptor<proxy_pb.Message, proxy_pb.Message>;
    unprotect(request: proxy_pb.Message, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Message>;
    unprotect(request: proxy_pb.Message, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.Message) => void): grpcWeb.ClientReadableStream<proxy_pb.Message>;
    methodDescriptorHash: grpcWeb.MethodDescriptor<proxy_pb.Message, proxy_pb.Message>;
    hash(request: proxy_pb.Message, metadata: grpcWeb.Metadata | null): Promise<proxy_pb.Message>;
    hash(request: proxy_pb.Message, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: proxy_pb.Message) => void): grpcWeb.ClientReadableStream<proxy_pb.Message>;
}
