```bash
      (`-.   _  .-')   .-') _    
    _(OO  )_( \( -O ) (  OO) )   
,--(_/   ,. \,------. /     '._  
\   \   /(__/|   /`. '|'--...__) 
 \   \ /   / |  /  | |'--.  .--' 
  \   '   /, |  |_.' |   |  |    
   \     /__)|  .  '.'   |  |    
    \   /    |  |\  \    |  |    
     `-'     `--' '--'   `--' 
```

# Vite React App Generator (vite-react-gen)

This is a simple and minimal Vite + React application generator, which can be used as a starting point for any Vite React app with TailwindCSS.

## Installation 🏭

```bash
$ npm install -g vite-react-gen
```

## Why another Vite React generator ❓

1.  This generates the Vite React application scaffold with **TailwindCSS** integration ⚡, making it easier to start building with a modern styling framework.

2.  Only installs the essential **dependencies** 🔑 for a React app setup with Vite, keeping it lightweight and fast.

## Quick Start 🏃‍♂️

The quickest way to get started with express is to utilize the executable `exp` (OR `express-draft`) to generate an application as shown below:

Create (and start) the app in current folder:

```bash
$ vrt .
$ npm run dev
```

OR, create (and start) the app (in `myApp` folder):

```bash
$ vrt myApp
$ cd myApp
$ npm run dev
```

## A Snapshot Says It All.

<p align='center'>
<img src='https://raw.githubusercontent.com/David-patrick-chuks/Vite-React-App-Generator-vite-react-gen-/refs/heads/main/SCREENCAST.svg' width='600' alt='vite-react-gen-draft'>
</p>


This will basically create this structure in your folder

```bash

.
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
├── vercel.json
├── vite.config.js
├── public
│   ├── assets
│   └── tailwind-css.svg
└── src
    ├── assets
    │   └── vite.svg
    ├── index.css
    ├── App.jsx
    └── main.jsx
            
```

This is how easy it is to get going.


## What dependencies does it install?

- **vite** - A fast build tool for modern web projects.
- **react** - A JavaScript library for building user interfaces.
- **react-dom** - Serves as the entry point for the React DOM rendering.
- **react-scripts** - Scripts and configuration used by Create React App.
- **@vitejs/plugin-react** - Official plugin for React support in Vite.
- **tailwindcss** - A utility-first CSS framework for rapidly building custom designs.
- **postcss** - A tool for transforming CSS with JavaScript plugins (needed by Tailwind CSS).
- **autoprefixer** - Adds vendor prefixes to CSS rules for better browser support (used with Tailwind CSS).

## Command Line Options

The `vrt` command provides several options to initialize a Vite + React app or to display help and version information.

### Usage
```bash
vrt [options]
```
# Options

```bash
<app-name>              Initialize a new Vite React app in the specified directory.

-h, --help              Print the help message listing available command line options.

<directory-name>        Specify a directory to initialize the app in.

-v, --version           Print the version of the vrt package.
```

## Creator ✍️

[**David Patrick**](https://davidtsx.vercel.app)

## Twitter 🐦

https://x.com/davepatty5686

## Donations 💰

https://buymeacoffee.com/davidpatrickchuks

## License 🎫
[MIT](LICENSE)

# Contributors
### [Dave Patty](https://github.com/David-patrick-chuks) 
<div style="display: inline-block; margin-right: 10px; overflow: hidden; border-radius: 50%;">
  <img src="https://avatars.githubusercontent.com/u/161928481?v=4" width="50" height="50" style="border-radius: 100%;" />
</div>

### [BugHunter-X](https://github.com/BugHunter-X) 
<div style="display: inline-block; overflow: hidden; border-radius: 50%;">
  <img src="https://avatars.githubusercontent.com/u/190237249?v=4" width="50" height="50" style="border-radius: 100%;" />
</div>

## Contributing

For contribution guidelines, please visit our [GitHub repository](https://github.com/David-patrick-chuks/vite-react-gen/blob/main/CONTRIBUTE.md).