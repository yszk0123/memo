# memo

Simple memo application

## Styleguide

https://yszk0123.github.io/memo/styleguide

## Development

### Tools

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [firebase-tools](https://www.npmjs.com/package/firebase-tools)

### Environment Variables

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`

### Local Server

```sh
# (set environment variables)
$ yarn install
$ firebase login
# (login)
$ yarn dev
# (open http://localhost:3000)
```

### Storybook

```sh
$ yarn storybook
# (open http://localhost:6006)
```

### Deploy

```sh
$ git push origin master
# (GitHub Actions build and deploy to GitHub Pages)
```

https://github.com/peaceiris/actions-gh-pages
