# typescript-capi-thrift-experiment

Generate typescript using
`yarn`
`yarn build`

## thrift differences

1. `shared.thrift` for atoms moved to `atoms/shared.thrift` and imports changed
2. `shared.thrift` for entities also moved
3. `namespace *` in `atoms/` replaced with `namespace js` see [issue](https://github.com/creditkarma/thrift-typescript/issues/119)

## todo

- build this in sync with capi
