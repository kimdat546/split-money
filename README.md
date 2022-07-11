Guide

# Create project vite

run the commands below and follow the template

```
yarn create vite
yarn
yarn dev
```

# Install tailwind css

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Copy code and paste inside tailwind.config.js

```
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### copy and paste inside index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Done
