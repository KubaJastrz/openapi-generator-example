#!/bin/sh

SCHEMA="${1:-schema.yml}"

docker run \
  --rm \
  --workdir "/app" \
  --volume "$(pwd):/app" \
  --user "$(id -u):$(id -g)" \
  openapitools/openapi-generator-cli generate \
    --generator-name typescript-fetch \
    --config openapi-config.yaml \
    --input-spec $SCHEMA \
    --output src/api/generated-api

echo "Formatting the generated files with Prettier"
yarn prettier --write src/api
