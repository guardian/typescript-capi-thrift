/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IReference {
    id: string;
    type: string;
}
export interface IReferenceArgs {
    id: string;
    type: string;
}
export const ReferenceCodec: thrift.IStructCodec<IReferenceArgs, IReference> = {
    encode(args: IReferenceArgs, output: thrift.TProtocol): void {
        const obj: any = {
            id: args.id,
            type: args.type
        };
        output.writeStructBegin("Reference");
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.STRING, 1);
            output.writeString(obj.id);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (obj.type != null) {
            output.writeFieldBegin("type", thrift.TType.STRING, 2);
            output.writeString(obj.type);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[type] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IReference {
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
                        _args.id = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.type = value_2;
                    }
                    else {
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
        if (_args.id !== undefined && _args.type !== undefined) {
            return {
                id: _args.id,
                type: _args.type
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Reference from input");
        }
    }
};
export class Reference extends thrift.StructLike implements IReference {
    public id: string;
    public type: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IReferenceArgs) {
        super();
        if (args.id != null) {
            const value_3: string = args.id;
            this.id = value_3;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (args.type != null) {
            const value_4: string = args.type;
            this.type = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[type] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): Reference {
        return new Reference(ReferenceCodec.decode(input));
    }
    public static write(args: IReferenceArgs, output: thrift.TProtocol): void {
        return ReferenceCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ReferenceCodec.encode(this, output);
    }
}
