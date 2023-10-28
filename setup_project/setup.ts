/* 1. tsc --init
2. npm i typescript
3. npm init
make 2 folder in project public(main.js and index.html) and src(app.ts and other ts files)

*/
Create config file

Webpack

npm i webpack webpack-cli ts-loader

create a webpack.config.ts file on roor dir

place the below code in to webpack.config.ts

import path from "path";
import webpack from "webpack";

const config : webpack.Configuration = {
    entry: "./src/app.ts",
    devtool: "eval-source-map",
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test:  /\.([cm]?ts)$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}  

export default config;



// add a script into package.json for build below test line already in script dont make sepreate scripts tag

"scripts": {
    "build": "webpack",
},





to create a dev server install webpack dev server 
npm i webpack-dev-server


add a script into package.json for start dev server
"scripts": {
    "serve": "webpack-dev-server",
},


To souce map add devTools option into webpack.config.ts and enable the comment from tsconfig.js for sourceMap: true

devtool: "eval-source-map",





Add include in the last of tsconfig.json

"include": ["./src"]


/* 
enable this "rootDir": "./src",  "rootDirs": [],  in tsconfig file
4. npm run build
npm i @swc/register
npm run build
5. npm run serve

 */


