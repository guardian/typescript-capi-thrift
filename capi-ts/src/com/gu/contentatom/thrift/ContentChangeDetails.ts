/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as com_gu_contentatom_thrift from './';
export interface IContentChangeDetails {
  lastModified?: com_gu_contentatom_thrift.IChangeRecord;
  created?: com_gu_contentatom_thrift.IChangeRecord;
  published?: com_gu_contentatom_thrift.IChangeRecord;
  revision: thrift.Int64;
  takenDown?: com_gu_contentatom_thrift.IChangeRecord;
  scheduledLaunch?: com_gu_contentatom_thrift.IChangeRecord;
  embargo?: com_gu_contentatom_thrift.IChangeRecord;
  expiry?: com_gu_contentatom_thrift.IChangeRecord;
}
export interface IContentChangeDetailsArgs {
  lastModified?: com_gu_contentatom_thrift.IChangeRecordArgs;
  created?: com_gu_contentatom_thrift.IChangeRecordArgs;
  published?: com_gu_contentatom_thrift.IChangeRecordArgs;
  revision: number | string | thrift.Int64;
  takenDown?: com_gu_contentatom_thrift.IChangeRecordArgs;
  scheduledLaunch?: com_gu_contentatom_thrift.IChangeRecordArgs;
  embargo?: com_gu_contentatom_thrift.IChangeRecordArgs;
  expiry?: com_gu_contentatom_thrift.IChangeRecordArgs;
}
export const ContentChangeDetailsCodec: thrift.IStructCodec<
  IContentChangeDetailsArgs,
  IContentChangeDetails
> = {
  encode(args: IContentChangeDetailsArgs, output: thrift.TProtocol): void {
    const obj = {
      lastModified: args.lastModified,
      created: args.created,
      published: args.published,
      revision:
        typeof args.revision === 'number'
          ? new thrift.Int64(args.revision)
          : typeof args.revision === 'string'
          ? thrift.Int64.fromDecimalString(args.revision)
          : args.revision,
      takenDown: args.takenDown,
      scheduledLaunch: args.scheduledLaunch,
      embargo: args.embargo,
      expiry: args.expiry,
    };
    output.writeStructBegin('ContentChangeDetails');
    if (obj.lastModified != null) {
      output.writeFieldBegin('lastModified', thrift.TType.STRUCT, 1);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(
        obj.lastModified,
        output
      );
      output.writeFieldEnd();
    }
    if (obj.created != null) {
      output.writeFieldBegin('created', thrift.TType.STRUCT, 2);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(obj.created, output);
      output.writeFieldEnd();
    }
    if (obj.published != null) {
      output.writeFieldBegin('published', thrift.TType.STRUCT, 3);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(obj.published, output);
      output.writeFieldEnd();
    }
    if (obj.revision != null) {
      output.writeFieldBegin('revision', thrift.TType.I64, 4);
      output.writeI64(
        typeof obj.revision === 'number'
          ? new thrift.Int64(obj.revision)
          : typeof obj.revision === 'string'
          ? thrift.Int64.fromDecimalString(obj.revision)
          : obj.revision
      );
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[revision] is unset!'
      );
    }
    if (obj.takenDown != null) {
      output.writeFieldBegin('takenDown', thrift.TType.STRUCT, 5);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(obj.takenDown, output);
      output.writeFieldEnd();
    }
    if (obj.scheduledLaunch != null) {
      output.writeFieldBegin('scheduledLaunch', thrift.TType.STRUCT, 6);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(
        obj.scheduledLaunch,
        output
      );
      output.writeFieldEnd();
    }
    if (obj.embargo != null) {
      output.writeFieldBegin('embargo', thrift.TType.STRUCT, 7);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(obj.embargo, output);
      output.writeFieldEnd();
    }
    if (obj.expiry != null) {
      output.writeFieldBegin('expiry', thrift.TType.STRUCT, 9);
      com_gu_contentatom_thrift.ChangeRecordCodec.encode(obj.expiry, output);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IContentChangeDetails {
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
          if (fieldType === thrift.TType.STRUCT) {
            const value_1: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.lastModified = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRUCT) {
            const value_2: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.created = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRUCT) {
            const value_3: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.published = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.I64) {
            const value_4: thrift.Int64 = input.readI64();
            _args.revision = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.STRUCT) {
            const value_5: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.takenDown = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.STRUCT) {
            const value_6: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.scheduledLaunch = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.STRUCT) {
            const value_7: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.embargo = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.STRUCT) {
            const value_8: com_gu_contentatom_thrift.IChangeRecord = com_gu_contentatom_thrift.ChangeRecordCodec.decode(
              input
            );
            _args.expiry = value_8;
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
    if (_args.revision !== undefined) {
      return {
        lastModified: _args.lastModified,
        created: _args.created,
        published: _args.published,
        revision: _args.revision,
        takenDown: _args.takenDown,
        scheduledLaunch: _args.scheduledLaunch,
        embargo: _args.embargo,
        expiry: _args.expiry,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read ContentChangeDetails from input'
      );
    }
  },
};
export class ContentChangeDetails extends thrift.StructLike
  implements IContentChangeDetails {
  public lastModified?: com_gu_contentatom_thrift.IChangeRecord;
  public created?: com_gu_contentatom_thrift.IChangeRecord;
  public published?: com_gu_contentatom_thrift.IChangeRecord;
  public revision: thrift.Int64;
  public takenDown?: com_gu_contentatom_thrift.IChangeRecord;
  public scheduledLaunch?: com_gu_contentatom_thrift.IChangeRecord;
  public embargo?: com_gu_contentatom_thrift.IChangeRecord;
  public expiry?: com_gu_contentatom_thrift.IChangeRecord;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IContentChangeDetailsArgs) {
    super();
    if (args.lastModified != null) {
      const value_9: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.lastModified
      );
      this.lastModified = value_9;
    }
    if (args.created != null) {
      const value_10: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.created
      );
      this.created = value_10;
    }
    if (args.published != null) {
      const value_11: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.published
      );
      this.published = value_11;
    }
    if (args.revision != null) {
      const value_12: thrift.Int64 =
        typeof args.revision === 'number'
          ? new thrift.Int64(args.revision)
          : typeof args.revision === 'string'
          ? thrift.Int64.fromDecimalString(args.revision)
          : args.revision;
      this.revision = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[revision] is unset!'
      );
    }
    if (args.takenDown != null) {
      const value_13: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.takenDown
      );
      this.takenDown = value_13;
    }
    if (args.scheduledLaunch != null) {
      const value_14: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.scheduledLaunch
      );
      this.scheduledLaunch = value_14;
    }
    if (args.embargo != null) {
      const value_15: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.embargo
      );
      this.embargo = value_15;
    }
    if (args.expiry != null) {
      const value_16: com_gu_contentatom_thrift.IChangeRecord = new com_gu_contentatom_thrift.ChangeRecord(
        args.expiry
      );
      this.expiry = value_16;
    }
  }
  public static read(input: thrift.TProtocol): ContentChangeDetails {
    return new ContentChangeDetails(ContentChangeDetailsCodec.decode(input));
  }
  public static write(
    args: IContentChangeDetailsArgs,
    output: thrift.TProtocol
  ): void {
    return ContentChangeDetailsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return ContentChangeDetailsCodec.encode(this, output);
  }
}