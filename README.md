## eCommerceApp 

eCommerce App by ReactJS, Typescript and Redux Toolkit


## Running Instructions

In the project directory, you can run:

### `npm install`

Installs node modules

## Project Structure

```
eCommerce App
├─ ecommerce-backend
│  ├─ db.json
│  ├─ package-lock.json
│  └─ package.json
├─ ecommerce-front
│  ├─ .eslintrc.cjs
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ API
│  │  ├─ assets
│  │  │  └─ svg
│  │  │     ├─ cart.svg
│  │  │     ├─ like-fill.svg
│  │  │     ├─ like.svg
│  │  │     └─ wishlist.svg
│  │  ├─ components
│  │  │  ├─ common
│  │  │  │  ├─ Footer
│  │  │  │  │  ├─ Footer.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ GridList
│  │  │  │  │  └─ GridList.tsx
│  │  │  │  ├─ Header
│  │  │  │  │  ├─ Header.tsx
│  │  │  │  │  ├─ HeaderCounter
│  │  │  │  │  │  ├─ HeaderCounter.tsx
│  │  │  │  │  │  └─ styles.module.css
│  │  │  │  │  ├─ HeaderLeftBar
│  │  │  │  │  │  ├─ HeaderLeftBar.tsx
│  │  │  │  │  │  └─ styles.module.css
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ Heading
│  │  │  │  │  └─ Heading.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ eCommerce
│  │  │  │  ├─ CartItem
│  │  │  │  │  ├─ CartItem.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ CartItemList
│  │  │  │  │  └─ CartItemList.tsx
│  │  │  │  ├─ CartSubtotalPrice
│  │  │  │  │  ├─ CartSubtotalPrice.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ Category
│  │  │  │  │  ├─ Category.tsx
│  │  │  │  │  └─ styles.module.css
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Product
│  │  │  │     ├─ Product.tsx
│  │  │  │     └─ styles.module.css
│  │  │  ├─ feedback
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Loading
│  │  │  │     └─ Loading.tsx
│  │  │  └─ forms
│  │  ├─ layouts
│  │  │  └─ MainLayout
│  │  │     ├─ MainLayout.tsx
│  │  │     └─ styles.module.css
│  │  ├─ main.tsx
│  │  ├─ pages
│  │  │  ├─ About.tsx
│  │  │  ├─ Cart.tsx
│  │  │  ├─ Categories.tsx
│  │  │  ├─ Error
│  │  │  │  ├─ Error.tsx
│  │  │  │  └─ styles.module.css
│  │  │  ├─ Home.tsx
│  │  │  ├─ Login.tsx
│  │  │  ├─ Prodect.tsx
│  │  │  ├─ Products.tsx
│  │  │  ├─ Register.tsx
│  │  │  └─ Wishlist.tsx
│  │  ├─ routes
│  │  │  └─ AppRouter.tsx
│  │  ├─ services
│  │  │  └─ axios-global.js
│  │  ├─ store
│  │  │  ├─ cart
│  │  │  │  ├─ act
│  │  │  │  │  └─ actGetProductsByItems.ts
│  │  │  │  ├─ cartSlice.ts
│  │  │  │  └─ selectors
│  │  │  │     └─ index.ts
│  │  │  ├─ categories
│  │  │  │  ├─ act
│  │  │  │  │  └─ actGetCategories.ts
│  │  │  │  └─ categoriesSlice.ts
│  │  │  ├─ index.ts
│  │  │  ├─ products
│  │  │  │  ├─ act
│  │  │  │  │  └─ actGetProductsByCatPrefix.ts
│  │  │  │  └─ productsSlice.ts
│  │  │  └─ wishlist
│  │  │     ├─ act
│  │  │     │  ├─ actGetWishlist.ts
│  │  │     │  └─ actLikeToggle.ts
│  │  │     └─ wishlistSlice.ts
│  │  ├─ styles
│  │  ├─ types
│  │  │  ├─ categoryTypes.ts
│  │  │  ├─ guards.ts
│  │  │  ├─ index.ts
│  │  │  ├─ productTypes.ts
│  │  │  └─ sharedTypes.ts
│  │  ├─ util
│  │  │  ├─ axiosEroorHandler.ts
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ package-lock.json
└─ package.json

```


## Libraries used

-   react
-   react-router
-   typscript
-   axios
-   Redux Toolkit
-   React bootstrap

 ##  Formater
 
 -  prettier

## Improvments

-   Make it responsive!
-   Add workflow using github actions to automate deploy process
-   Tests
