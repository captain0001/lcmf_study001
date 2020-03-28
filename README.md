## Vueの勉強会

### 目標1

```js
var dataset = {
    "headers": ["名前", "ジャンル", "楽器"],
    "data": [
        ["yasuhiro", "all", "guitar"],
        ["ob_yuu", "electoro", "piano"],
        ["gorio", "orchestra", "-"],
        ["kuarisu", "electro", "-"],
        ["koudai", "rock", "piano"]
    ]
};
```
↓
こんな感じで表示するコントロールを作る。
|名前|ジャンル|楽器|
|:-|:-|:-|
|yasuhiro|all|guitar|
|ob_yuu|electoro|piano|
|gorio|orchestra|-|
|kuarisu|electoro|-|
|koudai|rock|piano|