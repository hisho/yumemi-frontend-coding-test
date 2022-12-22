# API 仕様

## 都道府県取得

- path : `/api/prefectures`
- method : `GET`

### 成功

```json
[
    {
        "prefectureCode": 1,
        "prefectureName": "北海道"
    },
    ...
    {
        "prefectureCode": 47,
        "prefectureName": "沖縄県"
    }
]
```

```ts
type Prefecture = {
  prefectureCode: number
  prefectureName: string
}

type Prefectures = Prefecture[]
```

### 失敗

- HttpStatus:404

```json
{
  "message": "都道府県が存在しません。"
}
```

## 総人口取得

- path : `/api/population/total?prefectureCode={number}`
- method : `GET`

### 成功

- HttpStatus:200

```json
[
  {
    "value": 5039206,
    "year": 1960
  },
  ...
  {
    "value": 4004973,
    "year": 2045
  }
]
```

```ts
type TotalPopulation = {
  value: number
  year: number
}

type TotalPopulations = TotalPopulation[]
```

### 失敗

#### prefectureCode が指定されていない場合

- HttpStatus:400

```json
{
  "message": "prefectureCodeは必須です。"
}
```

#### prefectureCode が Number にならない場合

- HttpStatus:400

```json
{
  "message": "都道府県コードが不正です。"
}
```

#### prefectureCode は正常だが、データがない場合

- HttpStatus:404

```json
{
  "message": "データが存在しません。"
}
```
