/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as com_gu_contententity_thrift from "./../../com/gu/contententity/thrift";
export interface IGuideItem {
    title?: string;
    body: string;
    entities?: Array<com_gu_contententity_thrift.IEntity>;
}
export interface IGuideItemArgs {
    title?: string;
    body: string;
    entities?: Array<com_gu_contententity_thrift.IEntityArgs>;
}
export const GuideItemCodec: thrift.IStructCodec<IGuideItemArgs, IGuideItem> = {
    encode(args: IGuideItemArgs, output: thrift.TProtocol): void {
        const obj: any = {
            title: args.title,
            body: args.body,
            entities: args.entities
        };
        output.writeStructBegin("GuideItem");
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
        if (obj.entities != null) {
            output.writeFieldBegin("entities", thrift.TType.LIST, 3);
            output.writeListBegin(thrift.TType.STRUCT, obj.entities.length);
            obj.entities.forEach((value_1: com_gu_contententity_thrift.IEntityArgs): void => {
                com_gu_contententity_thrift.EntityCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGuideItem {
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
                        _args.title = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.body = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.LIST) {
                        const value_4: Array<com_gu_contententity_thrift.IEntity> = new Array<com_gu_contententity_thrift.IEntity>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: com_gu_contententity_thrift.IEntity = com_gu_contententity_thrift.EntityCodec.decode(input);
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.entities = value_4;
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
                body: _args.body,
                entities: _args.entities
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GuideItem from input");
        }
    }
};
export class GuideItem extends thrift.StructLike implements IGuideItem {
    public title?: string;
    public body: string;
    public entities?: Array<com_gu_contententity_thrift.IEntity>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGuideItemArgs) {
        super();
        if (args.title != null) {
            const value_6: string = args.title;
            this.title = value_6;
        }
        if (args.body != null) {
            const value_7: string = args.body;
            this.body = value_7;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[body] is unset!");
        }
        if (args.entities != null) {
            const value_8: Array<com_gu_contententity_thrift.IEntity> = new Array<com_gu_contententity_thrift.IEntity>();
            args.entities.forEach((value_9: com_gu_contententity_thrift.IEntityArgs): void => {
                const value_10: com_gu_contententity_thrift.IEntity = new com_gu_contententity_thrift.Entity(value_9);
                value_8.push(value_10);
            });
            this.entities = value_8;
        }
    }
    public static read(input: thrift.TProtocol): GuideItem {
        return new GuideItem(GuideItemCodec.decode(input));
    }
    public static write(args: IGuideItemArgs, output: thrift.TProtocol): void {
        return GuideItemCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GuideItemCodec.encode(this, output);
    }
}
