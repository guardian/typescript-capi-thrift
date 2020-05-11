/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IAudioElementFields {
    html?: string;
    source?: string;
    description?: string;
    title?: string;
    credit?: string;
    caption?: string;
    durationMinutes?: number;
    durationSeconds?: number;
    clean?: boolean;
    explicit?: boolean;
}
export interface IAudioElementFieldsArgs {
    html?: string;
    source?: string;
    description?: string;
    title?: string;
    credit?: string;
    caption?: string;
    durationMinutes?: number;
    durationSeconds?: number;
    clean?: boolean;
    explicit?: boolean;
}
export const AudioElementFieldsCodec: thrift.IStructCodec<IAudioElementFieldsArgs, IAudioElementFields> = {
    encode(args: IAudioElementFieldsArgs, output: thrift.TProtocol): void {
        const obj: any = {
            html: args.html,
            source: args.source,
            description: args.description,
            title: args.title,
            credit: args.credit,
            caption: args.caption,
            durationMinutes: args.durationMinutes,
            durationSeconds: args.durationSeconds,
            clean: args.clean,
            explicit: args.explicit
        };
        output.writeStructBegin("AudioElementFields");
        if (obj.html != null) {
            output.writeFieldBegin("html", thrift.TType.STRING, 1);
            output.writeString(obj.html);
            output.writeFieldEnd();
        }
        if (obj.source != null) {
            output.writeFieldBegin("source", thrift.TType.STRING, 2);
            output.writeString(obj.source);
            output.writeFieldEnd();
        }
        if (obj.description != null) {
            output.writeFieldBegin("description", thrift.TType.STRING, 3);
            output.writeString(obj.description);
            output.writeFieldEnd();
        }
        if (obj.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 4);
            output.writeString(obj.title);
            output.writeFieldEnd();
        }
        if (obj.credit != null) {
            output.writeFieldBegin("credit", thrift.TType.STRING, 5);
            output.writeString(obj.credit);
            output.writeFieldEnd();
        }
        if (obj.caption != null) {
            output.writeFieldBegin("caption", thrift.TType.STRING, 6);
            output.writeString(obj.caption);
            output.writeFieldEnd();
        }
        if (obj.durationMinutes != null) {
            output.writeFieldBegin("durationMinutes", thrift.TType.I32, 7);
            output.writeI32(obj.durationMinutes);
            output.writeFieldEnd();
        }
        if (obj.durationSeconds != null) {
            output.writeFieldBegin("durationSeconds", thrift.TType.I32, 8);
            output.writeI32(obj.durationSeconds);
            output.writeFieldEnd();
        }
        if (obj.clean != null) {
            output.writeFieldBegin("clean", thrift.TType.BOOL, 9);
            output.writeBool(obj.clean);
            output.writeFieldEnd();
        }
        if (obj.explicit != null) {
            output.writeFieldBegin("explicit", thrift.TType.BOOL, 10);
            output.writeBool(obj.explicit);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IAudioElementFields {
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
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.source = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.description = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.title = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.credit = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.STRING) {
                        const value_6: string = input.readString();
                        _args.caption = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.I32) {
                        const value_7: number = input.readI32();
                        _args.durationMinutes = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.I32) {
                        const value_8: number = input.readI32();
                        _args.durationSeconds = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_9: boolean = input.readBool();
                        _args.clean = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_10: boolean = input.readBool();
                        _args.explicit = value_10;
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
            source: _args.source,
            description: _args.description,
            title: _args.title,
            credit: _args.credit,
            caption: _args.caption,
            durationMinutes: _args.durationMinutes,
            durationSeconds: _args.durationSeconds,
            clean: _args.clean,
            explicit: _args.explicit
        };
    }
};
export class AudioElementFields extends thrift.StructLike implements IAudioElementFields {
    public html?: string;
    public source?: string;
    public description?: string;
    public title?: string;
    public credit?: string;
    public caption?: string;
    public durationMinutes?: number;
    public durationSeconds?: number;
    public clean?: boolean;
    public explicit?: boolean;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IAudioElementFieldsArgs = {}) {
        super();
        if (args.html != null) {
            const value_11: string = args.html;
            this.html = value_11;
        }
        if (args.source != null) {
            const value_12: string = args.source;
            this.source = value_12;
        }
        if (args.description != null) {
            const value_13: string = args.description;
            this.description = value_13;
        }
        if (args.title != null) {
            const value_14: string = args.title;
            this.title = value_14;
        }
        if (args.credit != null) {
            const value_15: string = args.credit;
            this.credit = value_15;
        }
        if (args.caption != null) {
            const value_16: string = args.caption;
            this.caption = value_16;
        }
        if (args.durationMinutes != null) {
            const value_17: number = args.durationMinutes;
            this.durationMinutes = value_17;
        }
        if (args.durationSeconds != null) {
            const value_18: number = args.durationSeconds;
            this.durationSeconds = value_18;
        }
        if (args.clean != null) {
            const value_19: boolean = args.clean;
            this.clean = value_19;
        }
        if (args.explicit != null) {
            const value_20: boolean = args.explicit;
            this.explicit = value_20;
        }
    }
    public static read(input: thrift.TProtocol): AudioElementFields {
        return new AudioElementFields(AudioElementFieldsCodec.decode(input));
    }
    public static write(args: IAudioElementFieldsArgs, output: thrift.TProtocol): void {
        return AudioElementFieldsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return AudioElementFieldsCodec.encode(this, output);
    }
}
