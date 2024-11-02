# ImageProcessingAPI

A RESTful Image Processing API built with Express, TypeScript, and Sharp, featuring testing with Jasmine.

---

## Getting Started

Follow these steps to set up and run the Image Processing API.

### Prerequisites

- Node.js (version 20.18.0 LTS or later)
- npm (comes with Node.js)

### Installation

1. **Install Required Modules:**

   ```bash
   npm install
   ```

2. **Build the Application:**

   ```bash
   npm run build
   ```

### Running the Application

- **Start the Development Server:**

  ```bash
  npm run dev
  ```

### Testing

- **Run Tests:**

  ```bash
  npm run test
  ```

### Linting and Formatting

- **Lint the Code:**

  ```bash
  npm run lint
  ```

- **Format Code with Prettier:**

  ```bash
  npm run prettier
  ```

---

## API Endpoints

### 1. Resize Image

- **Endpoint:** `POST /images/resize`
- **Description:** Resizes the uploaded image.
- **Request Body:**
  - Form-data with key `image`.
  - Request Body containing `width`, `height`

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
