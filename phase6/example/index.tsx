import React from 'react';
import util from 'util';
import { render } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(<></>);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');
