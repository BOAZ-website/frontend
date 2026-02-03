#!/bin/sh
set -e

pnpm install --frozen-lockfile
pnpm run build

rm -rf output
mkdir -p output
cp -R dist/* output/
cp vercel.json output/

echo "Build complete!"