/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface ICommonsDivision {
  parliamentId: string;
  description?: string;
  date: thrift.Int64;
  votes: __NAMESPACE__.IVotes;
}
export interface ICommonsDivisionArgs {
  parliamentId: string;
  description?: string;
  date: number | string | thrift.Int64;
  votes: __NAMESPACE__.IVotesArgs;
}
export const CommonsDivisionCodec: thrift.IStructCodec<
  ICommonsDivisionArgs,
  ICommonsDivision
> = {
  encode(args: ICommonsDivisionArgs, output: thrift.TProtocol): void {
    const obj = {
      parliamentId: args.parliamentId,
      description: args.description,
      date:
        typeof args.date === 'number'
          ? new thrift.Int64(args.date)
          : typeof args.date === 'string'
          ? thrift.Int64.fromDecimalString(args.date)
          : args.date,
      votes: args.votes,
    };
    output.writeStructBegin('CommonsDivision');
    if (obj.parliamentId != null) {
      output.writeFieldBegin('parliamentId', thrift.TType.STRING, 1);
      output.writeString(obj.parliamentId);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[parliamentId] is unset!'
      );
    }
    if (obj.description != null) {
      output.writeFieldBegin('description', thrift.TType.STRING, 2);
      output.writeString(obj.description);
      output.writeFieldEnd();
    }
    if (obj.date != null) {
      output.writeFieldBegin('date', thrift.TType.I64, 3);
      output.writeI64(
        typeof obj.date === 'number'
          ? new thrift.Int64(obj.date)
          : typeof obj.date === 'string'
          ? thrift.Int64.fromDecimalString(obj.date)
          : obj.date
      );
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[date] is unset!'
      );
    }
    if (obj.votes != null) {
      output.writeFieldBegin('votes', thrift.TType.STRUCT, 4);
      __NAMESPACE__.VotesCodec.encode(obj.votes, output);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[votes] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ICommonsDivision {
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
          if (fieldType === thrift.TType.STRING) {
            const value_1: string = input.readString();
            _args.parliamentId = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_2: string = input.readString();
            _args.description = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.I64) {
            const value_3: thrift.Int64 = input.readI64();
            _args.date = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRUCT) {
            const value_4: __NAMESPACE__.IVotes = __NAMESPACE__.VotesCodec.decode(
              input
            );
            _args.votes = value_4;
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
    if (
      _args.parliamentId !== undefined &&
      _args.date !== undefined &&
      _args.votes !== undefined
    ) {
      return {
        parliamentId: _args.parliamentId,
        description: _args.description,
        date: _args.date,
        votes: _args.votes,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read CommonsDivision from input'
      );
    }
  },
};
export class CommonsDivision extends thrift.StructLike
  implements ICommonsDivision {
  public parliamentId: string;
  public description?: string;
  public date: thrift.Int64;
  public votes: __NAMESPACE__.IVotes;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ICommonsDivisionArgs) {
    super();
    if (args.parliamentId != null) {
      const value_5: string = args.parliamentId;
      this.parliamentId = value_5;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[parliamentId] is unset!'
      );
    }
    if (args.description != null) {
      const value_6: string = args.description;
      this.description = value_6;
    }
    if (args.date != null) {
      const value_7: thrift.Int64 =
        typeof args.date === 'number'
          ? new thrift.Int64(args.date)
          : typeof args.date === 'string'
          ? thrift.Int64.fromDecimalString(args.date)
          : args.date;
      this.date = value_7;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[date] is unset!'
      );
    }
    if (args.votes != null) {
      const value_8: __NAMESPACE__.IVotes = new __NAMESPACE__.Votes(args.votes);
      this.votes = value_8;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[votes] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): CommonsDivision {
    return new CommonsDivision(CommonsDivisionCodec.decode(input));
  }
  public static write(
    args: ICommonsDivisionArgs,
    output: thrift.TProtocol
  ): void {
    return CommonsDivisionCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return CommonsDivisionCodec.encode(this, output);
  }
}