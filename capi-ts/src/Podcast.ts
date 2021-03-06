/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as PodcastCategory from "./PodcastCategory";
export interface IPodcast {
    linkUrl: string;
    copyright: string;
    author: string;
    subscriptionUrl?: string;
    explicit: boolean;
    image?: string;
    categories?: Array<PodcastCategory.IPodcastCategory>;
    podcastType?: string;
    googlePodcastsUrl?: string;
    spotifyUrl?: string;
}
export interface IPodcastArgs {
    linkUrl: string;
    copyright: string;
    author: string;
    subscriptionUrl?: string;
    explicit: boolean;
    image?: string;
    categories?: Array<PodcastCategory.IPodcastCategoryArgs>;
    podcastType?: string;
    googlePodcastsUrl?: string;
    spotifyUrl?: string;
}
export const PodcastCodec: thrift.IStructCodec<IPodcastArgs, IPodcast> = {
    encode(args: IPodcastArgs, output: thrift.TProtocol): void {
        const obj: any = {
            linkUrl: args.linkUrl,
            copyright: args.copyright,
            author: args.author,
            subscriptionUrl: args.subscriptionUrl,
            explicit: args.explicit,
            image: args.image,
            categories: args.categories,
            podcastType: args.podcastType,
            googlePodcastsUrl: args.googlePodcastsUrl,
            spotifyUrl: args.spotifyUrl
        };
        output.writeStructBegin("Podcast");
        if (obj.linkUrl != null) {
            output.writeFieldBegin("linkUrl", thrift.TType.STRING, 1);
            output.writeString(obj.linkUrl);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[linkUrl] is unset!");
        }
        if (obj.copyright != null) {
            output.writeFieldBegin("copyright", thrift.TType.STRING, 2);
            output.writeString(obj.copyright);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[copyright] is unset!");
        }
        if (obj.author != null) {
            output.writeFieldBegin("author", thrift.TType.STRING, 3);
            output.writeString(obj.author);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[author] is unset!");
        }
        if (obj.subscriptionUrl != null) {
            output.writeFieldBegin("subscriptionUrl", thrift.TType.STRING, 4);
            output.writeString(obj.subscriptionUrl);
            output.writeFieldEnd();
        }
        if (obj.explicit != null) {
            output.writeFieldBegin("explicit", thrift.TType.BOOL, 5);
            output.writeBool(obj.explicit);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[explicit] is unset!");
        }
        if (obj.image != null) {
            output.writeFieldBegin("image", thrift.TType.STRING, 6);
            output.writeString(obj.image);
            output.writeFieldEnd();
        }
        if (obj.categories != null) {
            output.writeFieldBegin("categories", thrift.TType.LIST, 7);
            output.writeListBegin(thrift.TType.STRUCT, obj.categories.length);
            obj.categories.forEach((value_1: PodcastCategory.IPodcastCategoryArgs): void => {
                PodcastCategory.PodcastCategoryCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.podcastType != null) {
            output.writeFieldBegin("podcastType", thrift.TType.STRING, 8);
            output.writeString(obj.podcastType);
            output.writeFieldEnd();
        }
        if (obj.googlePodcastsUrl != null) {
            output.writeFieldBegin("googlePodcastsUrl", thrift.TType.STRING, 9);
            output.writeString(obj.googlePodcastsUrl);
            output.writeFieldEnd();
        }
        if (obj.spotifyUrl != null) {
            output.writeFieldBegin("spotifyUrl", thrift.TType.STRING, 10);
            output.writeString(obj.spotifyUrl);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IPodcast {
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
                        _args.linkUrl = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.copyright = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.author = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.subscriptionUrl = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_6: boolean = input.readBool();
                        _args.explicit = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.image = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.LIST) {
                        const value_8: Array<PodcastCategory.IPodcastCategory> = new Array<PodcastCategory.IPodcastCategory>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_9: PodcastCategory.IPodcastCategory = PodcastCategory.PodcastCategoryCodec.decode(input);
                            value_8.push(value_9);
                        }
                        input.readListEnd();
                        _args.categories = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.STRING) {
                        const value_10: string = input.readString();
                        _args.podcastType = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.TType.STRING) {
                        const value_11: string = input.readString();
                        _args.googlePodcastsUrl = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.TType.STRING) {
                        const value_12: string = input.readString();
                        _args.spotifyUrl = value_12;
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
        if (_args.linkUrl !== undefined && _args.copyright !== undefined && _args.author !== undefined && _args.explicit !== undefined) {
            return {
                linkUrl: _args.linkUrl,
                copyright: _args.copyright,
                author: _args.author,
                subscriptionUrl: _args.subscriptionUrl,
                explicit: _args.explicit,
                image: _args.image,
                categories: _args.categories,
                podcastType: _args.podcastType,
                googlePodcastsUrl: _args.googlePodcastsUrl,
                spotifyUrl: _args.spotifyUrl
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Podcast from input");
        }
    }
};
export class Podcast extends thrift.StructLike implements IPodcast {
    public linkUrl: string;
    public copyright: string;
    public author: string;
    public subscriptionUrl?: string;
    public explicit: boolean;
    public image?: string;
    public categories?: Array<PodcastCategory.IPodcastCategory>;
    public podcastType?: string;
    public googlePodcastsUrl?: string;
    public spotifyUrl?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IPodcastArgs) {
        super();
        if (args.linkUrl != null) {
            const value_13: string = args.linkUrl;
            this.linkUrl = value_13;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[linkUrl] is unset!");
        }
        if (args.copyright != null) {
            const value_14: string = args.copyright;
            this.copyright = value_14;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[copyright] is unset!");
        }
        if (args.author != null) {
            const value_15: string = args.author;
            this.author = value_15;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[author] is unset!");
        }
        if (args.subscriptionUrl != null) {
            const value_16: string = args.subscriptionUrl;
            this.subscriptionUrl = value_16;
        }
        if (args.explicit != null) {
            const value_17: boolean = args.explicit;
            this.explicit = value_17;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[explicit] is unset!");
        }
        if (args.image != null) {
            const value_18: string = args.image;
            this.image = value_18;
        }
        if (args.categories != null) {
            const value_19: Array<PodcastCategory.IPodcastCategory> = new Array<PodcastCategory.IPodcastCategory>();
            args.categories.forEach((value_23: PodcastCategory.IPodcastCategoryArgs): void => {
                const value_24: PodcastCategory.IPodcastCategory = new PodcastCategory.PodcastCategory(value_23);
                value_19.push(value_24);
            });
            this.categories = value_19;
        }
        if (args.podcastType != null) {
            const value_20: string = args.podcastType;
            this.podcastType = value_20;
        }
        if (args.googlePodcastsUrl != null) {
            const value_21: string = args.googlePodcastsUrl;
            this.googlePodcastsUrl = value_21;
        }
        if (args.spotifyUrl != null) {
            const value_22: string = args.spotifyUrl;
            this.spotifyUrl = value_22;
        }
    }
    public static read(input: thrift.TProtocol): Podcast {
        return new Podcast(PodcastCodec.decode(input));
    }
    public static write(args: IPodcastArgs, output: thrift.TProtocol): void {
        return PodcastCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return PodcastCodec.encode(this, output);
    }
}
