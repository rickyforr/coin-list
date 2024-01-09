This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/coins](http://localhost:3000/api/coins). This endpoint can be edited in `pages/api/coins.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
``` 
All tests are located in `/__tests__` directory.


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Styles and Components

This project uses Chaka UI as a component library.
[Chakra UI](https://chakra-ui.com/) is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

### Folder Structure
```
├── components         #All UI components are located in this folder
│   ├── Header
│   ├── ItemDetails
│   ├── ItemsHome   
│   ├── ItemsTable     
│   ├── ItemsDetails    
│   ├── ProfileForm      
├── pages              #Next js folder used to create pages and api routes
│   ├── _app.tsx       #This file is used to wrap the app with context providers
│   ├── _document.tsx  #This file is used to add custom html tags
│   ├── api            
│   │   └── coins.ts   #This file contains the api to return coins data
│   └── index.tsx      #This is the main page. Uses UI elements from components folder
├── public             #This folder contains static files used in the app
├── styles             #This folder contains all the css files used in the app
├── system        #This folder contains types, data and logic that can be used across the app
│   ├── utils.ts
│   ├── types.ts
│   ├── ItemsContext.tsx
│   ├── useGetItems.ts
│   └── useProducts.ts
```

### UI Components
The UI components are located in the components folder. The components are broken down into smaller components to make them reusable. The components are also responsive.

### System
#### useGetItems
This hook is used to fetch the data from the api and store it in the state.

#### ItemsContext
This context is used to store the data fetched from the api. This context is used to share data across the app.

#### types
This file contains all the types used in the app.

#### utils
This file contains all the utility functions used in the app making the logic easily testable.

