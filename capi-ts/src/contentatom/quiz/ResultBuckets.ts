/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface IResultBuckets {
  buckets: Array<__NAMESPACE__.IResultBucket>;
}
export interface IResultBucketsArgs {
  buckets: Array<__NAMESPACE__.IResultBucketArgs>;
}
export const ResultBucketsCodec: thrift.IStructCodec<
  IResultBucketsArgs,
  IResultBuckets
> = {
  encode(args: IResultBucketsArgs, output: thrift.TProtocol): void {
    const obj = {
      buckets: args.buckets,
    };
    output.writeStructBegin('ResultBuckets');
    if (obj.buckets != null) {
      output.writeFieldBegin('buckets', thrift.TType.LIST, 1);
      output.writeListBegin(thrift.TType.STRUCT, obj.buckets.length);
      obj.buckets.forEach(
        (value_1: __NAMESPACE__.IResultBucketArgs): void => {
          __NAMESPACE__.ResultBucketCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[buckets] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IResultBuckets {
    let _args: any = {};
    input.readStructBegin();
    while (true) {
      const ret: thrift.IThriftField = input.readFieldBegin();
      const fieldType: thrift.TType = ret.fieldType;
      const fieldId: number = ret.fieldId;
      if (fieldType === thrift.TType.STOP) {
        break;
      }
      switch (fieldId) {
        case 1:
          if (fieldType === thrift.TType.LIST) {
            const value_2: Array<__NAMESPACE__.IResultBucket> = new Array<
              __NAMESPACE__.IResultBucket
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_3: __NAMESPACE__.IResultBucket = __NAMESPACE__.ResultBucketCodec.decode(
                input
              );
              value_2.push(value_3);
            }
            input.readListEnd();
            _args.buckets = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        default: {
          input.skip(fieldType);
        }
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    if (_args.buckets !== undefined) {
      return {
        buckets: _args.buckets,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read ResultBuckets from input'
      );
    }
  },
};
export class ResultBuckets extends thrift.StructLike implements IResultBuckets {
  public buckets: Array<__NAMESPACE__.IResultBucket>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IResultBucketsArgs) {
    super();
    if (args.buckets != null) {
      const value_4: Array<__NAMESPACE__.IResultBucket> = new Array<
        __NAMESPACE__.IResultBucket
      >();
      args.buckets.forEach(
        (value_5: __NAMESPACE__.IResultBucketArgs): void => {
          const value_6: __NAMESPACE__.IResultBucket = new __NAMESPACE__.ResultBucket(
            value_5
          );
          value_4.push(value_6);
        }
      );
      this.buckets = value_4;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[buckets] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): ResultBuckets {
    return new ResultBuckets(ResultBucketsCodec.decode(input));
  }
  public static write(
    args: IResultBucketsArgs,
    output: thrift.TProtocol
  ): void {
    return ResultBucketsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return ResultBucketsCodec.encode(this, output);
  }
}