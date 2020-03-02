import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import babel from 'rollup-plugin-babel';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/micro-designer.js",
  output: {
    file: "public/micro-designer.js",
    name: "bundle",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    babel(),
    css({ output: "public/bundle.css" }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    production && terser() // minify, but only in production
  ]
};
