`npm install git-commit-msg-linter --save-dev`
`npm i -D typescript @types/node`

En tsconfig.json
```json
{
    "compilerOptions": {
        "outDir": "/dist/",
        "target": "es2019",
        "module": "commonjs",
        "allowJs": true,
    }
}
```

js estandar style

standardjs.com/rules.html

`npm install --save-dev eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript
`

En .eslintrc.json

```json
{
    "extends": "standard-with-typescript",
    "parserOptions": {
        "project":"./tsconfig.json"
    },
    "rules":{
        "@typescript-eslint/no-redeclare":"off"
    }
}
```

En .eslintignore.json

```
*/node_modules/
node_modules
dist
```

install husky

```node
npm install -D husky@4
 
npm install -D husky
```
y creo .huskyrc.json

```json
{
  "hooks":{
    "pre-commit":"lint-staged"
  }
}
```

`npm i -D lint-staged`

creo .lintstagedrc.json

```json
{
  "*.ts":[
    "eslint 'src/**' --fix",
    "git add"
  ]
}
```