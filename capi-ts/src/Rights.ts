/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface IRights {
  syndicatable?: boolean;
  subscriptionDatabases?: boolean;
  developerCommunity?: boolean;
}
export interface IRightsArgs {
  syndicatable?: boolean;
  subscriptionDatabases?: boolean;
  developerCommunity?: boolean;
}
export const RightsCodec: thrift.IStructCodec<IRightsArgs, IRights> = {
  encode(args: IRightsArgs, output: thrift.TProtocol): void {
    const obj = {
      syndicatable: args.syndicatable != null ? args.syndicatable : false,
      subscriptionDatabases:
        args.subscriptionDatabases != null ? args.subscriptionDatabases : false,
      developerCommunity:
        args.developerCommunity != null ? args.developerCommunity : false,
    };
    output.writeStructBegin('Rights');
    if (obj.syndicatable != null) {
      output.writeFieldBegin('syndicatable', thrift.TType.BOOL, 1);
      output.writeBool(obj.syndicatable);
      output.writeFieldEnd();
    }
    if (obj.subscriptionDatabases != null) {
      output.writeFieldBegin('subscriptionDatabases', thrift.TType.BOOL, 2);
      output.writeBool(obj.subscriptionDatabases);
      output.writeFieldEnd();
    }
    if (obj.developerCommunity != null) {
      output.writeFieldBegin('developerCommunity', thrift.TType.BOOL, 3);
      output.writeBool(obj.developerCommunity);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IRights {
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
          if (fieldType === thrift.TType.BOOL) {
            const value_1: boolean = input.readBool();
            _args.syndicatable = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.BOOL) {
            const value_2: boolean = input.readBool();
            _args.subscriptionDatabases = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.BOOL) {
            const value_3: boolean = input.readBool();
            _args.developerCommunity = value_3;
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
    return {
      syndicatable: _args.syndicatable != null ? _args.syndicatable : false,
      subscriptionDatabases:
        _args.subscriptionDatabases != null
          ? _args.subscriptionDatabases
          : false,
      developerCommunity:
        _args.developerCommunity != null ? _args.developerCommunity : false,
    };
  },
};
export class Rights extends thrift.StructLike implements IRights {
  public syndicatable?: boolean = false;
  public subscriptionDatabases?: boolean = false;
  public developerCommunity?: boolean = false;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IRightsArgs = {}) {
    super();
    if (args.syndicatable != null) {
      const value_4: boolean = args.syndicatable;
      this.syndicatable = value_4;
    }
    if (args.subscriptionDatabases != null) {
      const value_5: boolean = args.subscriptionDatabases;
      this.subscriptionDatabases = value_5;
    }
    if (args.developerCommunity != null) {
      const value_6: boolean = args.developerCommunity;
      this.developerCommunity = value_6;
    }
  }
  public static read(input: thrift.TProtocol): Rights {
    return new Rights(RightsCodec.decode(input));
  }
  public static write(args: IRightsArgs, output: thrift.TProtocol): void {
    return RightsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return RightsCodec.encode(this, output);
  }
}