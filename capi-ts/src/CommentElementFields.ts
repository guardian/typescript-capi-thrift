/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface ICommentElementFields {
    source?: string;
    discussionKey?: string;
    commentUrl?: string;
    originalUrl?: string;
    sourceUrl?: string;
    discussionUrl?: string;
    authorUrl?: string;
    html?: string;
    authorName?: string;
    commentId?: number;
}
export interface ICommentElementFieldsArgs {
    source?: string;
    discussionKey?: string;
    commentUrl?: string;
    originalUrl?: string;
    sourceUrl?: string;
    discussionUrl?: string;
    authorUrl?: string;
    html?: string;
    authorName?: string;
    commentId?: number;
}
export const CommentElementFieldsCodec: thrift.IStructCodec<ICommentElementFieldsArgs, ICommentElementFields> = {
    encode(args: ICommentElementFieldsArgs, output: thrift.TProtocol): void {
        const obj: any = {
            source: args.source,
            discussionKey: args.discussionKey,
            commentUrl: args.commentUrl,
            originalUrl: args.originalUrl,
            sourceUrl: args.sourceUrl,
            discussionUrl: args.discussionUrl,
            authorUrl: args.authorUrl,
            html: args.html,
            authorName: args.authorName,
            commentId: args.commentId
        };
        output.writeStructBegin("CommentElementFields");
        if (obj.source != null) {
            output.writeFieldBegin("source", thrift.TType.STRING, 1);
            output.writeString(obj.source);
            output.writeFieldEnd();
        }
        if (obj.discussionKey != null) {
            output.writeFieldBegin("discussionKey", thrift.TType.STRING, 2);
            output.writeString(obj.discussionKey);
            output.writeFieldEnd();
        }
        if (obj.commentUrl != null) {
            output.writeFieldBegin("commentUrl", thrift.TType.STRING, 3);
            output.writeString(obj.commentUrl);
            output.writeFieldEnd();
        }
        if (obj.originalUrl != null) {
            output.writeFieldBegin("originalUrl", thrift.TType.STRING, 4);
            output.writeString(obj.originalUrl);
            output.writeFieldEnd();
        }
        if (obj.sourceUrl != null) {
            output.writeFieldBegin("sourceUrl", thrift.TType.STRING, 5);
            output.writeString(obj.sourceUrl);
            output.writeFieldEnd();
        }
        if (obj.discussionUrl != null) {
            output.writeFieldBegin("discussionUrl", thrift.TType.STRING, 6);
            output.writeString(obj.discussionUrl);
            output.writeFieldEnd();
        }
        if (obj.authorUrl != null) {
            output.writeFieldBegin("authorUrl", thrift.TType.STRING, 7);
            output.writeString(obj.authorUrl);
            output.writeFieldEnd();
        }
        if (obj.html != null) {
            output.writeFieldBegin("html", thrift.TType.STRING, 8);
            output.writeString(obj.html);
            output.writeFieldEnd();
        }
        if (obj.authorName != null) {
            output.writeFieldBegin("authorName", thrift.TType.STRING, 9);
            output.writeString(obj.authorName);
            output.writeFieldEnd();
        }
        if (obj.commentId != null) {
            output.writeFieldBegin("commentId", thrift.TType.I32, 10);
            output.writeI32(obj.commentId);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ICommentElementFields {
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
                        _args.source = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.discussionKey = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.commentUrl = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.originalUrl = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.sourceUrl = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.STRING) {
                        const value_6: string = input.readString();
                        _args.discussionUrl = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.authorUrl = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.STRING) {
                        const value_8: string = input.readString();
                        _args.html = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.TType.STRING) {
                        const value_9: string = input.readString();
                        _args.authorName = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.TType.I32) {
                        const value_10: number = input.readI32();
                        _args.commentId = value_10;
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
            source: _args.source,
            discussionKey: _args.discussionKey,
            commentUrl: _args.commentUrl,
            originalUrl: _args.originalUrl,
            sourceUrl: _args.sourceUrl,
            discussionUrl: _args.discussionUrl,
            authorUrl: _args.authorUrl,
            html: _args.html,
            authorName: _args.authorName,
            commentId: _args.commentId
        };
    }
};
export class CommentElementFields extends thrift.StructLike implements ICommentElementFields {
    public source?: string;
    public discussionKey?: string;
    public commentUrl?: string;
    public originalUrl?: string;
    public sourceUrl?: string;
    public discussionUrl?: string;
    public authorUrl?: string;
    public html?: string;
    public authorName?: string;
    public commentId?: number;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ICommentElementFieldsArgs = {}) {
        super();
        if (args.source != null) {
            const value_11: string = args.source;
            this.source = value_11;
        }
        if (args.discussionKey != null) {
            const value_12: string = args.discussionKey;
            this.discussionKey = value_12;
        }
        if (args.commentUrl != null) {
            const value_13: string = args.commentUrl;
            this.commentUrl = value_13;
        }
        if (args.originalUrl != null) {
            const value_14: string = args.originalUrl;
            this.originalUrl = value_14;
        }
        if (args.sourceUrl != null) {
            const value_15: string = args.sourceUrl;
            this.sourceUrl = value_15;
        }
        if (args.discussionUrl != null) {
            const value_16: string = args.discussionUrl;
            this.discussionUrl = value_16;
        }
        if (args.authorUrl != null) {
            const value_17: string = args.authorUrl;
            this.authorUrl = value_17;
        }
        if (args.html != null) {
            const value_18: string = args.html;
            this.html = value_18;
        }
        if (args.authorName != null) {
            const value_19: string = args.authorName;
            this.authorName = value_19;
        }
        if (args.commentId != null) {
            const value_20: number = args.commentId;
            this.commentId = value_20;
        }
    }
    public static read(input: thrift.TProtocol): CommentElementFields {
        return new CommentElementFields(CommentElementFieldsCodec.decode(input));
    }
    public static write(args: ICommentElementFieldsArgs, output: thrift.TProtocol): void {
        return CommentElementFieldsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return CommentElementFieldsCodec.encode(this, output);
    }
}
