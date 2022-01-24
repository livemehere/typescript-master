# Typescript 컴파일러

```bash
tsc --init
```

```bash
tsc -w
```

## tsconfig.json

ts파일이 존재하는 최상이 폴더를 기준으로 build내부가 구성됨

```json
{
  "outDir": "./build" /* Specify an output folder for all emitted files. */
}
```

## sourcmap: true

typescript 디버깅할때 사용
