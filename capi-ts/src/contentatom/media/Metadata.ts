/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as PrivacyStatus from "./PrivacyStatus";
import * as PlutoData from "./PlutoData";
import * as YoutubeData from "./YoutubeData";
export interface IMetadata {
    tags?: Array<string>;
    categoryId?: string;
    license?: string;
    commentsEnabled?: boolean;
    channelId?: string;
    privacyStatus?: PrivacyStatus.PrivacyStatus;
    expiryDate?: thrift.Int64;
    pluto?: PlutoData.IPlutoData;
    youtube?: YoutubeData.IYoutubeData;
}
export interface IMetadataArgs {
    tags?: Array<string>;
    categoryId?: string;
    license?: string;
    commentsEnabled?: boolean;
    channelId?: string;
    privacyStatus?: PrivacyStatus.PrivacyStatus;
    expiryDate?: number | string | thrift.Int64;
    pluto?: PlutoData.IPlutoDataArgs;
    youtube?: YoutubeData.IYoutubeDataArgs;
}
export const MetadataCodec: thrift.IStructCodec<IMetadataArgs, IMetadata> = {
    encode(args: IMetadataArgs, output: thrift.TProtocol): void {
        const obj: any = {
            tags: args.tags,
            categoryId: args.categoryId,
            license: args.license,
            commentsEnabled: args.commentsEnabled,
            channelId: args.channelId,
            privacyStatus: args.privacyStatus,
            expiryDate: (typeof args.expiryDate === "number" ? new thrift.Int64(args.expiryDate) : typeof args.expiryDate === "string" ? thrift.Int64.fromDecimalString(args.expiryDate) : args.expiryDate),
            pluto: args.pluto,
            youtube: args.youtube
        };
        output.writeStructBegin("Metadata");
        if (obj.tags != null) {
            output.writeFieldBegin("tags", thrift.TType.LIST, 1);
            output.writeListBegin(thrift.TType.STRING, obj.tags.length);
            obj.tags.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.categoryId != null) {
            output.writeFieldBegin("categoryId", thrift.TType.STRING, 2);
            output.writeString(obj.categoryId);
            output.writeFieldEnd();
        }
        if (obj.license != null) {
            output.writeFieldBegin("license", thrift.TType.STRING, 3);
            output.writeString(obj.license);
            output.writeFieldEnd();
        }
        if (obj.commentsEnabled != null) {
            output.writeFieldBegin("commentsEnabled", thrift.TType.BOOL, 4);
            output.writeBool(obj.commentsEnabled);
            output.writeFieldEnd();
        }
        if (obj.channelId != null) {
            output.writeFieldBegin("channelId", thrift.TType.STRING, 5);
            output.writeString(obj.channelId);
            output.writeFieldEnd();
        }
        if (obj.privacyStatus != null) {
            output.writeFieldBegin("privacyStatus", thrift.TType.I32, 6);
            output.writeI32(obj.privacyStatus);
            output.writeFieldEnd();
        }
        if (obj.expiryDate != null) {
            output.writeFieldBegin("expiryDate", thrift.TType.I64, 7);
            output.writeI64((typeof obj.expiryDate === "number" ? new thrift.Int64(obj.expiryDate) : typeof obj.expiryDate === "string" ? thrift.Int64.fromDecimalString(obj.expiryDate) : obj.expiryDate));
            output.writeFieldEnd();
        }
        if (obj.pluto != null) {
            output.writeFieldBegin("pluto", thrift.TType.STRUCT, 8);
            PlutoData.PlutoDataCodec.encode(obj.pluto, output);
            output.writeFieldEnd();
        }
        if (obj.youtube != null) {
            output.writeFieldBegin("youtube", thrift.TType.STRUCT, 9);
            YoutubeData.YoutubeDataCodec.encode(obj.youtube, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IMetadata {
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
                        const value_2: Array<string> = new Array<string>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: string = input.readString();
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.tags = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.categoryId = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.license = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_6: boolean = input.readBool();
                        _args.commentsEnabled = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.channelId = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.I32) {
                        const value_8: PrivacyStatus.PrivacyStatus = input.readI32();
                        _args.privacyStatus = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.I64) {
                        const value_9: thrift.Int64 = input.readI64();
                        _args.expiryDate = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_10: PlutoData.IPlutoData = PlutoData.PlutoDataCodec.decode(input);
                        _args.pluto = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_11: YoutubeData.IYoutubeData = YoutubeData.YoutubeDataCodec.decode(input);
                        _args.youtube = value_11;
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
            tags: _args.tags,
            categoryId: _args.categoryId,
            license: _args.license,
            commentsEnabled: _args.commentsEnabled,
            channelId: _args.channelId,
            privacyStatus: _args.privacyStatus,
            expiryDate: _args.expiryDate,
            pluto: _args.pluto,
            youtube: _args.youtube
        };
    }
};
export class Metadata extends thrift.StructLike implements IMetadata {
    public tags?: Array<string>;
    public categoryId?: string;
    public license?: string;
    public commentsEnabled?: boolean;
    public channelId?: string;
    public privacyStatus?: PrivacyStatus.PrivacyStatus;
    public expiryDate?: thrift.Int64;
    public pluto?: PlutoData.IPlutoData;
    public youtube?: YoutubeData.IYoutubeData;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IMetadataArgs = {}) {
        super();
        if (args.tags != null) {
            const value_12: Array<string> = new Array<string>();
            args.tags.forEach((value_21: string): void => {
                const value_22: string = value_21;
                value_12.push(value_22);
            });
            this.tags = value_12;
        }
        if (args.categoryId != null) {
            const value_13: string = args.categoryId;
            this.categoryId = value_13;
        }
        if (args.license != null) {
            const value_14: string = args.license;
            this.license = value_14;
        }
        if (args.commentsEnabled != null) {
            const value_15: boolean = args.commentsEnabled;
            this.commentsEnabled = value_15;
        }
        if (args.channelId != null) {
            const value_16: string = args.channelId;
            this.channelId = value_16;
        }
        if (args.privacyStatus != null) {
            const value_17: PrivacyStatus.PrivacyStatus = args.privacyStatus;
            this.privacyStatus = value_17;
        }
        if (args.expiryDate != null) {
            const value_18: thrift.Int64 = (typeof args.expiryDate === "number" ? new thrift.Int64(args.expiryDate) : typeof args.expiryDate === "string" ? thrift.Int64.fromDecimalString(args.expiryDate) : args.expiryDate);
            this.expiryDate = value_18;
        }
        if (args.pluto != null) {
            const value_19: PlutoData.IPlutoData = new PlutoData.PlutoData(args.pluto);
            this.pluto = value_19;
        }
        if (args.youtube != null) {
            const value_20: YoutubeData.IYoutubeData = new YoutubeData.YoutubeData(args.youtube);
            this.youtube = value_20;
        }
    }
    public static read(input: thrift.TProtocol): Metadata {
        return new Metadata(MetadataCodec.decode(input));
    }
    public static write(args: IMetadataArgs, output: thrift.TProtocol): void {
        return MetadataCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return MetadataCodec.encode(this, output);
    }
}
