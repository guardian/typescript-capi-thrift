import { Content } from './codegen/com/gu/story/model/v1/Content';
import { readFileSync } from 'fs';

import { decoder } from '@creditkarma/thrift-utils'
import { ItemResponse, ItemResponseCodec } from './codegen/ItemResponse';
import { CompactProtocol, BufferedTransport } from '@creditkarma/thrift-server-core';

//https://content.guardianapis.com/food/2019/apr/17/how-to-make-the-perfect-profiteroles-recipe-felicity-cloake?format=thrift&api-key=APIKEYGOESHERE&show-elements=all&show-atoms=all&show-rights=all&show-fields=all&show-tags=all&show-blocks=all&show-references=all

const buffer = readFileSync('./how-to-make-the-perfect-profiteroles-recipe-felicity-cloake')
try {
    //This is a copy of https://github.com/creditkarma/thrift-typescript/blob/master/src/main/render/shared/utils.ts
    //which stops early as a class constructor was throwing
    const receiver: BufferedTransport = BufferedTransport.receiver(buffer)
    const input = new CompactProtocol(receiver)
    const data = ItemResponseCodec.decode(input)
    console.log(data)
    // const decoded = new ItemResponse(data) //This is what the library wants to do next but it gives an error in the constructor

    console.log(data.content)
} catch (e) {
    console.log(e)
}


// const thriftClient: Calculator.Client<CoreOptions> = createHttpClient(Calculator.Client, CONFIG)
