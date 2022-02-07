API_DIR = .

.PHONY: all
all: protobuf

.PHONY: protobuf
protobuf:
	mkdir -p $(API_DIR)/proxy
	mkdir -p $(API_DIR)/allocator
	protoc \
		--proto_path=$(API_DIR)/protobuf \
		--js_out=import_style=commonjs,binary:$(API_DIR)/proxy \
		--grpc-web_out=import_style=typescript,mode=grpcweb:$(API_DIR)/proxy \
		proxy.proto
	protoc \
		--proto_path=$(API_DIR)/protobuf \
		--js_out=import_style=commonjs,binary:$(API_DIR)/allocator \
		--grpc-web_out=import_style=typescript,mode=grpcweb:$(API_DIR)/allocator \
		allocator.proto
