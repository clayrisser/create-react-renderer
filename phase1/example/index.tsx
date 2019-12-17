import React from 'react';
import { render } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(<></>);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(renderedOutput);
console.log('\n\n--------------');
