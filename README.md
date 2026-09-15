# product-catalog-react

This is a product catalog application. It fetches products from the DummyJSON API and allows users to search, filter, add, edit, and remove products during the current session. I did it using React and Vite.

## Functionalities

### Top Rated Products

- Shows the three highest-rated products as cards
- Displays a product image, title, price, and rating

### Products Table

- Shows all available products in a table
- Sorts products alphabetically by title
- Removes a selected product from the list

### Search and Filter

- Searches products by title
- Filters products by title, category, price range, and rating range

### Product Management

- Adds a new product with input validation
- Edits an existing product
- Removes a product from the local list

> Changes are not permanently saved. The initial product data is loaded from the API, while adding, editing, and removing products only affects the current session.

## Technologies

- React
- Vite
- Tailwind CSS
- Axios
- DummyJSON Products API

## How to Run

```bash
npm install
npm run dev
```

The application will be available at the local address shown in the terminal, usually `http://localhost:5173`.
