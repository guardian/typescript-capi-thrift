/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IAtomUsageResponse {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    results: Array<string>;
}
export interface IAtomUsageResponseArgs {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    results: Array<string>;
}
export const AtomUsageResponseCodec: thrift.IStructCodec<IAtomUsageResponseArgs, IAtomUsageResponse> = {
    encode(args: IAtomUsageResponseArgs, output: thrift.TProtocol): void {
        const obj: any = {
            status: args.status,
            userTier: args.userTier,
            total: args.total,
            startIndex: args.startIndex,
            pageSize: args.pageSize,
            currentPage: args.currentPage,
            pages: args.pages,
            results: args.results
        };
        output.writeStructBegin("AtomUsageResponse");
        if (obj.status != null) {
            output.writeFieldBegin("status", thrift.TType.STRING, 1);
            output.writeString(obj.status);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[status] is unset!");
        }
        if (obj.userTier != null) {
            output.writeFieldBegin("userTier", thrift.TType.STRING, 2);
            output.writeString(obj.userTier);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[userTier] is unset!");
        }
        if (obj.total != null) {
            output.writeFieldBegin("total", thrift.TType.I32, 3);
            output.writeI32(obj.total);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[total] is unset!");
        }
        if (obj.startIndex != null) {
            output.writeFieldBegin("startIndex", thrift.TType.I32, 4);
            output.writeI32(obj.startIndex);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[startIndex] is unset!");
        }
        if (obj.pageSize != null) {
            output.writeFieldBegin("pageSize", thrift.TType.I32, 5);
            output.writeI32(obj.pageSize);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[pageSize] is unset!");
        }
        if (obj.currentPage != null) {
            output.writeFieldBegin("currentPage", thrift.TType.I32, 6);
            output.writeI32(obj.currentPage);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[currentPage] is unset!");
        }
        if (obj.pages != null) {
            output.writeFieldBegin("pages", thrift.TType.I32, 7);
            output.writeI32(obj.pages);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[pages] is unset!");
        }
        if (obj.results != null) {
            output.writeFieldBegin("results", thrift.TType.LIST, 8);
            output.writeListBegin(thrift.TType.STRING, obj.results.length);
            obj.results.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[results] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IAtomUsageResponse {
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
                        const value_2: string = input.readString();
                        _args.status = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.userTier = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.I32) {
                        const value_4: number = input.readI32();
                        _args.total = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.I32) {
                        const value_5: number = input.readI32();
                        _args.startIndex = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.I32) {
                        const value_6: number = input.readI32();
                        _args.pageSize = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.I32) {
                        const value_7: number = input.readI32();
                        _args.currentPage = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.I32) {
                        const value_8: number = input.readI32();
                        _args.pages = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.LIST) {
                        const value_9: Array<string> = new Array<string>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_10: string = input.readString();
                            value_9.push(value_10);
                        }
                        input.readListEnd();
                        _args.results = value_9;
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
        if (_args.status !== undefined && _args.userTier !== undefined && _args.total !== undefined && _args.startIndex !== undefined && _args.pageSize !== undefined && _args.currentPage !== undefined && _args.pages !== undefined && _args.results !== undefined) {
            return {
                status: _args.status,
                userTier: _args.userTier,
                total: _args.total,
                startIndex: _args.startIndex,
                pageSize: _args.pageSize,
                currentPage: _args.currentPage,
                pages: _args.pages,
                results: _args.results
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read AtomUsageResponse from input");
        }
    }
};
export class AtomUsageResponse extends thrift.StructLike implements IAtomUsageResponse {
    public status: string;
    public userTier: string;
    public total: number;
    public startIndex: number;
    public pageSize: number;
    public currentPage: number;
    public pages: number;
    public results: Array<string>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IAtomUsageResponseArgs) {
        super();
        if (args.status != null) {
            const value_11: string = args.status;
            this.status = value_11;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[status] is unset!");
        }
        if (args.userTier != null) {
            const value_12: string = args.userTier;
            this.userTier = value_12;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[userTier] is unset!");
        }
        if (args.total != null) {
            const value_13: number = args.total;
            this.total = value_13;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[total] is unset!");
        }
        if (args.startIndex != null) {
            const value_14: number = args.startIndex;
            this.startIndex = value_14;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[startIndex] is unset!");
        }
        if (args.pageSize != null) {
            const value_15: number = args.pageSize;
            this.pageSize = value_15;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[pageSize] is unset!");
        }
        if (args.currentPage != null) {
            const value_16: number = args.currentPage;
            this.currentPage = value_16;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[currentPage] is unset!");
        }
        if (args.pages != null) {
            const value_17: number = args.pages;
            this.pages = value_17;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[pages] is unset!");
        }
        if (args.results != null) {
            const value_18: Array<string> = new Array<string>();
            args.results.forEach((value_19: string): void => {
                const value_20: string = value_19;
                value_18.push(value_20);
            });
            this.results = value_18;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[results] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): AtomUsageResponse {
        return new AtomUsageResponse(AtomUsageResponseCodec.decode(input));
    }
    public static write(args: IAtomUsageResponseArgs, output: thrift.TProtocol): void {
        return AtomUsageResponseCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return AtomUsageResponseCodec.encode(this, output);
    }
}
