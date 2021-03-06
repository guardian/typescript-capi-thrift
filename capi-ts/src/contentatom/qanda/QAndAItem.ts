/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IQAndAItem {
    title?: string;
    body: string;
}
export interface IQAndAItemArgs {
    title?: string;
    body: string;
}
export const QAndAItemCodec: thrift.IStructCodec<IQAndAItemArgs, IQAndAItem> = {
    encode(args: IQAndAItemArgs, output: thrift.TProtocol): void {
        const obj: any = {
            title: args.title,
            body: args.body
        };
        output.writeStructBegin("QAndAItem");
        if (obj.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 1);
            output.writeString(obj.title);
            output.writeFieldEnd();
        }
        if (obj.body != null) {
            output.writeFieldBegin("body", thrift.TType.STRING, 2);
            output.writeString(obj.body);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[body] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IQAndAItem {
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
                        _args.title = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.body = value_2;
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
        if (_args.body !== undefined) {
            return {
                title: _args.title,
                body: _args.body
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read QAndAItem from input");
        }
    }
};
export class QAndAItem extends thrift.StructLike implements IQAndAItem {
    public title?: string;
    public body: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IQAndAItemArgs) {
        super();
        if (args.title != null) {
            const value_3: string = args.title;
            this.title = value_3;
        }
        if (args.body != null) {
            const value_4: string = args.body;
            this.body = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[body] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): QAndAItem {
        return new QAndAItem(QAndAItemCodec.decode(input));
    }
    public static write(args: IQAndAItemArgs, output: thrift.TProtocol): void {
        return QAndAItemCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return QAndAItemCodec.encode(this, output);
    }
}
