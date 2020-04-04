// rollup config for pre-build test script
/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/pre-build.js',
    output: {
        file: 'dist/pre-build.js',
        format: 'cjs',
    },
    plugins: [
        resolve(),
    ],
};
