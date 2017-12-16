# mfg_core_ui_demo

## Workstation

It is a good thing to use a modern frontend IDE to work with this project.
As it is an ES6/ES7 project, it is wise to use something like Atom IDE (https://atom.io/)

Plugin for Atom are also recommended :

* atom-react-autocomplete
* autocomplete-js-import
* autocomplete-modules
* language-babel
* react-es6-snippets
* react-snippets


You can install those by using Atom UI or easily with CLI :

```
apm install atom-react-autocomplete autocomplete-js-import autocomplete-modules language-babel react-es6-snippets react-snippets
```

## Project initialization

```
npm install -g create-react-app
create-react-app mfg_core_ui_demo
cd mfg_core_ui_demo
npm install -g
```

## Development workflow

This project use creare-react-app and follow its guideline.
Read the README.md file for generic more information.



## UI kit

This project use Bootstrap 3 through the use of react-bootstrap library : https://react-bootstrap.github.io/
Refer to react-bootstrap documentation for using any component.

## Build

```
npm run build
```

## Deploy

### Static Server Mode

```
npm install -g serve
serve -h -p 443
```
