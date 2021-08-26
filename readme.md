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

instalar jest 

`npm i -D jest  @types/jest ts-jest`

si instla asi inicio asi 
`node_modules/.bin/jest --init.`

sino lo instalo de manera global
`npm install -g jest`

pero tira este error
```
Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/jest'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/jest'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/jest'
npm ERR! }
```

respuestas jest
```

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … no
```

tsconfig.json

```json
export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/***/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
```
`npm ts-node`

`npm test` para correr test