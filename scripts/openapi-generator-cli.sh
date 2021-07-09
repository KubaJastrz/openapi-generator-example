#!/bin/sh

docker run \
  --rm \
  --workdir "/app" \
  --volume "$(pwd):/app" \
  --user "$(id -u):$(id -g)" \
  openapitools/openapi-generator-cli generate \
    --generator-name typescript-fetch \
    --config openapi-config.yaml \
    --input-spec schema.yml \
    --output src/api
