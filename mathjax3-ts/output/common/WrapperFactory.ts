/*************************************************************
 *
 *  Copyright (c) 2017 The MathJax Consortium
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
 * @fileoverview  Implements the OutputWrapperFactory class
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {CommonOutputJax} from './OutputJax.js';
import {AbstractWrapperFactory} from '../../core/Tree/WrapperFactory.js';
import {CommonWrapper, CommonWrapperClass} from './Wrapper.js';
import {MmlNode} from '../../core/MmlTree/MmlNode.js';

/*****************************************************************/
/**
 *  The OutputWrapperFactory class for creating OutputWrapper nodes
 *
 * @template J  The OutputJax type
 * @template W  The Wrapper type
 * @template C  The WrapperClass type
 */
export class CommonWrapperFactory<
    J extends CommonOutputJax<any, any, any, W, CommonWrapperFactory<J, W, C>, any, any>,
    W extends CommonWrapper<J, W, C>,
    C extends CommonWrapperClass<J, W, C>> extends
AbstractWrapperFactory<MmlNode, W, C> {

    /**
     * The default list of wrapper nodes this factory can create
     *   (filled in by subclasses)
     */
    public static defaultNodes: {[kind: string]: CommonWrapperClass<any, any, any>} = {};

    /**
     * The output jax associated with this factory
     */
    public jax: J = null;

    /**
     * @return {object}  The list of node-creation functions
     */
    get Wrappers() {
        return this.node;
    }

}
