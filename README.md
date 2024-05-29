# Responsive Web Design (RWD) Frontend Webpage 

<div>
   <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="35">
   <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="35">
   <img src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" width="35">
   <img src="https://swr.vercel.app/favicon/apple-touch-icon.png" width="35">
   <img src="https://reactrouter.com/favicon-light.png" width="35">
   <img src="https://docs.pmnd.rs/zustand.ico" width="35">
   <img src="https://usehooks-ts.com/apple-touch-icon.png" width="35">
</div>

## 📖 Overview

This project is a responsive web design (RWD) frontend webpage that provides an interactive and user-friendly interface for searching and displaying results. It features a home page for keyword input and page size selection, a results page for displaying search results, and a friend panel for viewing followers and following lists. The application supports infinite scrolling and includes a navigation bar for easy navigation between different sections of the site.

## ⚙️ Technical Stack

- React 18
- Material UI v5
- React Router v6
- SWR
- Zustand
- usehooks-ts

## ✨ Features

### Home Page

1. **Keyword Search Input:**

    - Users can enter a keyword in a text input field.
    - The search button is enabled only when the text input is non-empty; it is disabled when the input is empty.
2. **Page Size Selection:**

    - Users can use a slider to select the number of results displayed per page.
3. **Search Button:**

    - Upon clicking the search button, users are directed to the results page.

### Results Page

1. **Search Results Display:**
    - Results are displayed in a card format.
    - Each card includes an image, title, and username.
    - If the keyword is empty, redirect to the home page.

### Friend Panel

1. **Responsive Display:**

    - The friend panel is displayed on both the home page and results page when the display width is greater than 1440px.
2. **Tabs for Followers and Following:**

    - The friend panel includes two tabs: Followers and Following.
    - Each tab displays the corresponding list of friends.
3. **Infinite Scrolling for Friends List:**

    - The friends list supports infinite scrolling, automatically loading more friends as the user scrolls to the bottom of the list.

### Navigation Bar

- Allows users to navigate between the home page and tags page.

## 🚧 Pending Features / Improvements

1. **TypeScript Integration:**

    - Refactor the codebase to use TypeScript for better type safety and development experience.
2. **Tags Page Implementation:**

    - Implement the tags page and its subcomponents.
    - Integrate with tags API to support loading more tags and infinite scrolling, and provide a skeleton loader.
3. **Results Page Load More Functionality:**

    - Implement a load more button or infinite scrolling using `useSWRInfinite` for the results page, with a skeleton loader.
4. **Page Size Configuration:**

    - Allow the `ManyComponentsSkeleton` to accept `pageSize` as a parameter to configure the number of items displayed.
5. **Result Card Component Extraction:**

    - Refactor the results display to extract a reusable result card component.
6. **Mock APIs:**

    - Implement mock APIs to facilitate development and testing.
7. **Testing:**

    - Provide comprehensive testing for the application.

## 🙈 Issues to be clarified

1. **Slider Step Inconsistency:**

    - The length of each step in the slider is not consistent.
2. **Home Page Results Count:**

    - The number of results displayed on the home page does not match the number selected on the slider.
3. **Result Page Row Gap:**

    - The row gap between results on the result page is inconsistent.

## 🚀 Usage

1. On the home page, enter a keyword in the search input field.
2. Use the slider to select the desired page size.
3. Click the search button to view results on the results page.
4. Explore the friend panel if your display width is greater than 1440px.
5. Use the navigation bar to switch between the home page and tags page (when implemented).

## 📝 License

This project is [MIT](https://github.com/juliencrn/usehooks-ts/blob/master/LICENSE) licensed.
