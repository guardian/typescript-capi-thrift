/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface ICrosswordEntry {
  id: string;
  number?: number;
  humanNumber?: string;
  direction?: string;
  position?: __NAMESPACE__.ICrosswordPosition;
  separatorLocations?: Map<string, Array<number>>;
  length?: number;
  clue?: string;
  group?: Array<string>;
  solution?: string;
  format?: string;
}
export interface ICrosswordEntryArgs {
  id: string;
  number?: number;
  humanNumber?: string;
  direction?: string;
  position?: __NAMESPACE__.ICrosswordPositionArgs;
  separatorLocations?: Map<string, Array<number>>;
  length?: number;
  clue?: string;
  group?: Array<string>;
  solution?: string;
  format?: string;
}
export const CrosswordEntryCodec: thrift.IStructCodec<
  ICrosswordEntryArgs,
  ICrosswordEntry
> = {
  encode(args: ICrosswordEntryArgs, output: thrift.TProtocol): void {
    const obj = {
      id: args.id,
      number: args.number,
      humanNumber: args.humanNumber,
      direction: args.direction,
      position: args.position,
      separatorLocations: args.separatorLocations,
      length: args.length,
      clue: args.clue,
      group: args.group,
      solution: args.solution,
      format: args.format,
    };
    output.writeStructBegin('CrosswordEntry');
    if (obj.id != null) {
      output.writeFieldBegin('id', thrift.TType.STRING, 1);
      output.writeString(obj.id);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (obj.number != null) {
      output.writeFieldBegin('number', thrift.TType.I32, 2);
      output.writeI32(obj.number);
      output.writeFieldEnd();
    }
    if (obj.humanNumber != null) {
      output.writeFieldBegin('humanNumber', thrift.TType.STRING, 3);
      output.writeString(obj.humanNumber);
      output.writeFieldEnd();
    }
    if (obj.direction != null) {
      output.writeFieldBegin('direction', thrift.TType.STRING, 4);
      output.writeString(obj.direction);
      output.writeFieldEnd();
    }
    if (obj.position != null) {
      output.writeFieldBegin('position', thrift.TType.STRUCT, 5);
      __NAMESPACE__.CrosswordPositionCodec.encode(obj.position, output);
      output.writeFieldEnd();
    }
    if (obj.separatorLocations != null) {
      output.writeFieldBegin('separatorLocations', thrift.TType.MAP, 6);
      output.writeMapBegin(
        thrift.TType.STRING,
        thrift.TType.LIST,
        obj.separatorLocations.size
      );
      obj.separatorLocations.forEach(
        (value_1: Array<number>, key_1: string): void => {
          output.writeString(key_1);
          output.writeListBegin(thrift.TType.I32, value_1.length);
          value_1.forEach(
            (value_2: number): void => {
              output.writeI32(value_2);
            }
          );
          output.writeListEnd();
        }
      );
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    if (obj.length != null) {
      output.writeFieldBegin('length', thrift.TType.I32, 7);
      output.writeI32(obj.length);
      output.writeFieldEnd();
    }
    if (obj.clue != null) {
      output.writeFieldBegin('clue', thrift.TType.STRING, 8);
      output.writeString(obj.clue);
      output.writeFieldEnd();
    }
    if (obj.group != null) {
      output.writeFieldBegin('group', thrift.TType.LIST, 9);
      output.writeListBegin(thrift.TType.STRING, obj.group.length);
      obj.group.forEach(
        (value_3: string): void => {
          output.writeString(value_3);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.solution != null) {
      output.writeFieldBegin('solution', thrift.TType.STRING, 10);
      output.writeString(obj.solution);
      output.writeFieldEnd();
    }
    if (obj.format != null) {
      output.writeFieldBegin('format', thrift.TType.STRING, 11);
      output.writeString(obj.format);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ICrosswordEntry {
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
            const value_4: string = input.readString();
            _args.id = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.I32) {
            const value_5: number = input.readI32();
            _args.number = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRING) {
            const value_6: string = input.readString();
            _args.humanNumber = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_7: string = input.readString();
            _args.direction = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.STRUCT) {
            const value_8: __NAMESPACE__.ICrosswordPosition = __NAMESPACE__.CrosswordPositionCodec.decode(
              input
            );
            _args.position = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.MAP) {
            const value_9: Map<string, Array<number>> = new Map<
              string,
              Array<number>
            >();
            const metadata_1: thrift.IThriftMap = input.readMapBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const key_2: string = input.readString();
              const value_10: Array<number> = new Array<number>();
              const metadata_2: thrift.IThriftList = input.readListBegin();
              const size_2: number = metadata_2.size;
              for (let i_2: number = 0; i_2 < size_2; i_2++) {
                const value_11: number = input.readI32();
                value_10.push(value_11);
              }
              input.readListEnd();
              value_9.set(key_2, value_10);
            }
            input.readMapEnd();
            _args.separatorLocations = value_9;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.I32) {
            const value_12: number = input.readI32();
            _args.length = value_12;
          } else {
            input.skip(fieldType);
          }
          break;
        case 8:
          if (fieldType === thrift.TType.STRING) {
            const value_13: string = input.readString();
            _args.clue = value_13;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.LIST) {
            const value_14: Array<string> = new Array<string>();
            const metadata_3: thrift.IThriftList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_15: string = input.readString();
              value_14.push(value_15);
            }
            input.readListEnd();
            _args.group = value_14;
          } else {
            input.skip(fieldType);
          }
          break;
        case 10:
          if (fieldType === thrift.TType.STRING) {
            const value_16: string = input.readString();
            _args.solution = value_16;
          } else {
            input.skip(fieldType);
          }
          break;
        case 11:
          if (fieldType === thrift.TType.STRING) {
            const value_17: string = input.readString();
            _args.format = value_17;
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
    if (_args.id !== undefined) {
      return {
        id: _args.id,
        number: _args.number,
        humanNumber: _args.humanNumber,
        direction: _args.direction,
        position: _args.position,
        separatorLocations: _args.separatorLocations,
        length: _args.length,
        clue: _args.clue,
        group: _args.group,
        solution: _args.solution,
        format: _args.format,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read CrosswordEntry from input'
      );
    }
  },
};
export class CrosswordEntry extends thrift.StructLike
  implements ICrosswordEntry {
  public id: string;
  public number?: number;
  public humanNumber?: string;
  public direction?: string;
  public position?: __NAMESPACE__.ICrosswordPosition;
  public separatorLocations?: Map<string, Array<number>>;
  public length?: number;
  public clue?: string;
  public group?: Array<string>;
  public solution?: string;
  public format?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ICrosswordEntryArgs) {
    super();
    if (args.id != null) {
      const value_18: string = args.id;
      this.id = value_18;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (args.number != null) {
      const value_19: number = args.number;
      this.number = value_19;
    }
    if (args.humanNumber != null) {
      const value_20: string = args.humanNumber;
      this.humanNumber = value_20;
    }
    if (args.direction != null) {
      const value_21: string = args.direction;
      this.direction = value_21;
    }
    if (args.position != null) {
      const value_22: __NAMESPACE__.ICrosswordPosition = new __NAMESPACE__.CrosswordPosition(
        args.position
      );
      this.position = value_22;
    }
    if (args.separatorLocations != null) {
      const value_23: Map<string, Array<number>> = new Map<
        string,
        Array<number>
      >();
      args.separatorLocations.forEach(
        (value_29: Array<number>, key_3: string): void => {
          const value_30: Array<number> = new Array<number>();
          value_29.forEach(
            (value_31: number): void => {
              const value_32: number = value_31;
              value_30.push(value_32);
            }
          );
          const key_4: string = key_3;
          value_23.set(key_4, value_30);
        }
      );
      this.separatorLocations = value_23;
    }
    if (args.length != null) {
      const value_24: number = args.length;
      this.length = value_24;
    }
    if (args.clue != null) {
      const value_25: string = args.clue;
      this.clue = value_25;
    }
    if (args.group != null) {
      const value_26: Array<string> = new Array<string>();
      args.group.forEach(
        (value_33: string): void => {
          const value_34: string = value_33;
          value_26.push(value_34);
        }
      );
      this.group = value_26;
    }
    if (args.solution != null) {
      const value_27: string = args.solution;
      this.solution = value_27;
    }
    if (args.format != null) {
      const value_28: string = args.format;
      this.format = value_28;
    }
  }
  public static read(input: thrift.TProtocol): CrosswordEntry {
    return new CrosswordEntry(CrosswordEntryCodec.decode(input));
  }
  public static write(
    args: ICrosswordEntryArgs,
    output: thrift.TProtocol
  ): void {
    return CrosswordEntryCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return CrosswordEntryCodec.encode(this, output);
  }
}