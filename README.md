# typescript-capi-thrift-experiment

Generate typescript using
`yarn`
`npx run ts-node index.ts`

## thrift differences

1. `shared.thrift` for atoms moved to `atoms/shared.thrift` and imports changed
2. `shared.thrift` for entities also moved
3. `namespace *` in `atoms/` replaced with `namespace js` see [issue](https://github.com/creditkarma/thrift-typescript/issues/119)

## todo

- build this from thrift jars
- either fix or workaround `namespace *` bug
- use this to decode data from CAPI
- automate codegen
- where should this live?