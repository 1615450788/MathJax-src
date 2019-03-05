import './lib/complexity.js';

import {combineDefaults} from '../../../../mathjax3/components/global.js';
import {sreReady} from '../../../../mathjax3/a11y/sre.js';
import {ComplexityHandler} from '../../../../mathjax3/a11y/complexity.js';
import {MathML} from '../../../../mathjax3/input/mathml.js';
import {STATE} from '../../../../mathjax3/core/MathItem.js';

if (MathJax.loader) {
    combineDefaults(MathJax.config.loader, 'a11y/complexity', {checkReady: () => sreReady});
}

if (MathJax.startup) {
    MathJax.startup.extendHandler(handler => ComplexityHandler(handler, new MathML()));
    MathJax.startup.typesetCall('complexity', STATE.COMPLEXITY);
    MathJax.startup.convertCall('complexity', STATE.COMPLEXITY);
    combineDefaults(MathJax.config, 'options', MathJax.config['a11y/complexity'] || {});
}
