## Is an emoji vector Graphics
Yes, but it's typically not svg format. It's frequently in woff (Web Open Font Format).

## What is package-lock.json for
Package lock is important for two primary reasons:
    1. It fixes the version numbers for dependencies with variable versions to ensure build consistency
    2. It makes the build mo' faster

You should always commit your package-lock.json files to your repo.

If your packages get fucked up, delete node_modules, delete package-lock.json, and re-run `npm i`. 

If you have issues from the package upgrades, fix the issues to prevent bugs and vulnerabilities in the future.

## How do I use a github repo as an npm dependency?
Here's an example: `"uWebSockets.js": "github:uNetworking/uWebSockets.js#v20.24.0"`

Here's the docs: https://docs.npmjs.com/cli/v9/configuring-npm/package-json#github-urls

