import { uglify } from "rollup-plugin-uglify";
import multiEntry from "rollup-plugin-multi-entry";

export default {
  input: ['src/thingsthat.js', 'src/thingsthat.window.js', 'src/thingsthat.images.js','src/thingsthat.format.js'],
  output: {
    file: 'dist/thingsthat.min.js',
    format: 'iife'
  },
  plugins: [
    uglify(),
    multiEntry()
  ]
};