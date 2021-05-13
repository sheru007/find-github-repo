# find-github-repo

Get a list of Github repositories of specified username sorted by numbers of stars in descending order and last updated time

## Installation

```js
# using npm
npm install find-github-repo

# using yarn
yarn add find-github-repo
```

## Usage

```js
# using require
const { callGetRepoFun } = require('find-github-repo');

# using import
import { callGetRepoFun } from 'find-github-repo';
```

## Example

### Using promises:

```js
// username = github username
// page = page which you want to see like 1,2,3,4...
// per_page = number of item on each page 
callGetRepoFun(username, page, per_page).then(res => {
    console.log({my_Res: res})
})
```
