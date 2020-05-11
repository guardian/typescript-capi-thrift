# typescript-capi-thrift

This project is used to generate [@guardian/capi-ts](https://www.npmjs.com/package/@guardian/capi-ts).

## Updating a thrift dependency

The thirft dependencies are maven dependencies published to the `com.gu` groupId on Maven central and are fetched from [maven](https://maven.org).

They are defined like so in `index.ts`:

```typescript
  { name: "content-api-models", version: "14.2" },
```

To update a dependency, change the version number in `index.ts`.

To release the update run `make publish`. This will require npm credentials, and for you to be part of the guardian npm organisation.

## Changes to thrift files

For `thrift-typescript` to build these files, it may be neccescary to make changes to the definition.
In this case, please document the change- and attempt to fix the upstream files if possible.

1. `namespace *` in `atoms/` replaced with `namespace js` see [issue](https://github.com/creditkarma/thrift-typescript/issues/119)
