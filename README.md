## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `predeploy`

### `Deploy`

[My page](https://koen-smit.github.io/Portfolio/)




- JSX (HTML-like syntax in JavaScript)
- Components (functions returning UI)
- Props (passing data between components)
- State (handling dynamic data)

#### Tailwind:

- npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
- npm install @craco/crac
- Override "scripts" package.json
- craco config to setup tailwind
- npx tailwindcss-cli@latest init
- change index.css to add @tailwind base;, @tailwind components;, @tailwind utilities;
- npm start -> run local
- Add right config, jit + purge:
```JS
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```


#### react-icons
- https://react-icons.github.io/react-icons/