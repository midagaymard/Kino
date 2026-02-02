import css from "rollup-plugin-css-only";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "iife"
    },
    plugins: [css({ output: "dist/bundle.css" }), nodeResolve()]
}