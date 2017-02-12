/*************************************************************
 *
 *  Copyright (c) 2015-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview The TexParser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {AbstractSymbolMap, SymbolMap} from './symbol_map';
import {ParseResult} from './types';
import MapHandler from './map_handler';
import {BaseMappings} from './base_mappings';
import {Tree} from '../../TreeJax/lib/tree';


export namespace TexParser {

  let tree = new Tree();
  
  export function parse(symbol: string): Tree {
    MapHandler.getInstance().configure(BaseMappings.Configuration);
    MapHandler.getInstance().parse(symbol);
    console.log(tree);
    return tree;
  }
  
}