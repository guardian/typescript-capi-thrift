/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IEmbedElementFields {
    html?: string;
    safeEmbedCode?: boolean;
    alt?: string;
    isMandatory?: boolean;
}
export interface IEmbedElementFieldsArgs {
    html?: string;
    safeEmbedCode?: boolean;
    alt?: string;
    isMandatory?: boolean;
}
export const EmbedElementFieldsCodec: thrift.IStructCodec<IEmbedElementFieldsArgs, IEmbedElementFields> = {
    encode(args: IEmbedElementFieldsArgs, output: thrift.TProtocol): void {
        const obj: any = {
            html: args.html,
            safeEmbedCode: args.safeEmbedCode,
            alt: args.alt,
            isMandatory: args.isMandatory
        };
        output.writeStructBegin("EmbedElementFields");
        if (obj.html != null) {
            output.writeFieldBegin("html", thrift.TType.STRING, 1);
            output.writeString(obj.html);
            output.writeFieldEnd();
        }
        if (obj.safeEmbedCode != null) {
            output.writeFieldBegin("safeEmbedCode", thrift.TType.BOOL, 2);
            output.writeBool(obj.safeEmbedCode);
            output.writeFieldEnd();
        }
        if (obj.alt != null) {
            output.writeFieldBegin("alt", thrift.TType.STRING, 3);
            output.writeString(obj.alt);
            output.writeFieldEnd();
        }
        if (obj.isMandatory != null) {
            output.writeFieldBegin("isMandatory", thrift.TType.BOOL, 4);
            output.writeBool(obj.isMandatory);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IEmbedElementFields {
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
                        _args.html = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_2: boolean = input.readBool();
                        _args.safeEmbedCode = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.alt = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_4: boolean = input.readBool();
                        _args.isMandatory = value_4;
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
        return {
            html: _args.html,
            safeEmbedCode: _args.safeEmbedCode,
            alt: _args.alt,
            isMandatory: _args.isMandatory
        };
    }
};
export class EmbedElementFields extends thrift.StructLike implements IEmbedElementFields {
    public html?: string;
    public safeEmbedCode?: boolean;
    public alt?: string;
    public isMandatory?: boolean;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IEmbedElementFieldsArgs = {}) {
        super();
        if (args.html != null) {
            const value_5: string = args.html;
            this.html = value_5;
        }
        if (args.safeEmbedCode != null) {
            const value_6: boolean = args.safeEmbedCode;
            this.safeEmbedCode = value_6;
        }
        if (args.alt != null) {
            const value_7: string = args.alt;
            this.alt = value_7;
        }
        if (args.isMandatory != null) {
            const value_8: boolean = args.isMandatory;
            this.isMandatory = value_8;
        }
    }
    public static read(input: thrift.TProtocol): EmbedElementFields {
        return new EmbedElementFields(EmbedElementFieldsCodec.decode(input));
    }
    public static write(args: IEmbedElementFieldsArgs, output: thrift.TProtocol): void {
        return EmbedElementFieldsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return EmbedElementFieldsCodec.encode(this, output);
    }
}
