/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface IInstagramElementFields {
  originalUrl: string;
  title: string;
  source: string;
  authorUrl: string;
  authorUsername: string;
  html?: string;
  width?: number;
  alt?: string;
  caption?: string;
}
export interface IInstagramElementFieldsArgs {
  originalUrl: string;
  title: string;
  source: string;
  authorUrl: string;
  authorUsername: string;
  html?: string;
  width?: number;
  alt?: string;
  caption?: string;
}
export const InstagramElementFieldsCodec: thrift.IStructCodec<
  IInstagramElementFieldsArgs,
  IInstagramElementFields
> = {
  encode(args: IInstagramElementFieldsArgs, output: thrift.TProtocol): void {
    const obj = {
      originalUrl: args.originalUrl,
      title: args.title,
      source: args.source,
      authorUrl: args.authorUrl,
      authorUsername: args.authorUsername,
      html: args.html,
      width: args.width,
      alt: args.alt,
      caption: args.caption,
    };
    output.writeStructBegin('InstagramElementFields');
    if (obj.originalUrl != null) {
      output.writeFieldBegin('originalUrl', thrift.TType.STRING, 1);
      output.writeString(obj.originalUrl);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[originalUrl] is unset!'
      );
    }
    if (obj.title != null) {
      output.writeFieldBegin('title', thrift.TType.STRING, 2);
      output.writeString(obj.title);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (obj.source != null) {
      output.writeFieldBegin('source', thrift.TType.STRING, 3);
      output.writeString(obj.source);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[source] is unset!'
      );
    }
    if (obj.authorUrl != null) {
      output.writeFieldBegin('authorUrl', thrift.TType.STRING, 4);
      output.writeString(obj.authorUrl);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[authorUrl] is unset!'
      );
    }
    if (obj.authorUsername != null) {
      output.writeFieldBegin('authorUsername', thrift.TType.STRING, 5);
      output.writeString(obj.authorUsername);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[authorUsername] is unset!'
      );
    }
    if (obj.html != null) {
      output.writeFieldBegin('html', thrift.TType.STRING, 6);
      output.writeString(obj.html);
      output.writeFieldEnd();
    }
    if (obj.width != null) {
      output.writeFieldBegin('width', thrift.TType.I32, 7);
      output.writeI32(obj.width);
      output.writeFieldEnd();
    }
    if (obj.alt != null) {
      output.writeFieldBegin('alt', thrift.TType.STRING, 8);
      output.writeString(obj.alt);
      output.writeFieldEnd();
    }
    if (obj.caption != null) {
      output.writeFieldBegin('caption', thrift.TType.STRING, 9);
      output.writeString(obj.caption);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IInstagramElementFields {
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
            _args.originalUrl = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_2: string = input.readString();
            _args.title = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRING) {
            const value_3: string = input.readString();
            _args.source = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_4: string = input.readString();
            _args.authorUrl = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.STRING) {
            const value_5: string = input.readString();
            _args.authorUsername = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.STRING) {
            const value_6: string = input.readString();
            _args.html = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.I32) {
            const value_7: number = input.readI32();
            _args.width = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        case 8:
          if (fieldType === thrift.TType.STRING) {
            const value_8: string = input.readString();
            _args.alt = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.STRING) {
            const value_9: string = input.readString();
            _args.caption = value_9;
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
    if (
      _args.originalUrl !== undefined &&
      _args.title !== undefined &&
      _args.source !== undefined &&
      _args.authorUrl !== undefined &&
      _args.authorUsername !== undefined
    ) {
      return {
        originalUrl: _args.originalUrl,
        title: _args.title,
        source: _args.source,
        authorUrl: _args.authorUrl,
        authorUsername: _args.authorUsername,
        html: _args.html,
        width: _args.width,
        alt: _args.alt,
        caption: _args.caption,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read InstagramElementFields from input'
      );
    }
  },
};
export class InstagramElementFields extends thrift.StructLike
  implements IInstagramElementFields {
  public originalUrl: string;
  public title: string;
  public source: string;
  public authorUrl: string;
  public authorUsername: string;
  public html?: string;
  public width?: number;
  public alt?: string;
  public caption?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IInstagramElementFieldsArgs) {
    super();
    if (args.originalUrl != null) {
      const value_10: string = args.originalUrl;
      this.originalUrl = value_10;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[originalUrl] is unset!'
      );
    }
    if (args.title != null) {
      const value_11: string = args.title;
      this.title = value_11;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (args.source != null) {
      const value_12: string = args.source;
      this.source = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[source] is unset!'
      );
    }
    if (args.authorUrl != null) {
      const value_13: string = args.authorUrl;
      this.authorUrl = value_13;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[authorUrl] is unset!'
      );
    }
    if (args.authorUsername != null) {
      const value_14: string = args.authorUsername;
      this.authorUsername = value_14;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[authorUsername] is unset!'
      );
    }
    if (args.html != null) {
      const value_15: string = args.html;
      this.html = value_15;
    }
    if (args.width != null) {
      const value_16: number = args.width;
      this.width = value_16;
    }
    if (args.alt != null) {
      const value_17: string = args.alt;
      this.alt = value_17;
    }
    if (args.caption != null) {
      const value_18: string = args.caption;
      this.caption = value_18;
    }
  }
  public static read(input: thrift.TProtocol): InstagramElementFields {
    return new InstagramElementFields(
      InstagramElementFieldsCodec.decode(input)
    );
  }
  public static write(
    args: IInstagramElementFieldsArgs,
    output: thrift.TProtocol
  ): void {
    return InstagramElementFieldsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return InstagramElementFieldsCodec.encode(this, output);
  }
}