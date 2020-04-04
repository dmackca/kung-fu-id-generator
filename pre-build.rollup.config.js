// rollup config for pre-build test script
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/pre-build.js',
    output: {
        file: 'dist/pre-build.js',
        format: 'cjs',
        name: 'MyBundle',
    },
    plugins: [
        resolve(),
    ],
};
