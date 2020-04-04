/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'kfId',
    },
    plugins: [
        resolve(),
        terser(),
    ],
};
