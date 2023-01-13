# secquraise task

Live link: https://secquraise-task.web.app/

## dependencies

1. TailwindCSS as dev
2. React Loader Spinner for Loader
3. Firebase

## Solution Plan

1. I used Firestore db for storing data from excel. To upload data from excel into firebase, I used node.js and firebase admin.
2. For image hosting I used Firebase Storage.
3. To make my code reusable, I made two custom hook, One is for fetching all the data from firebase with/without any filtering and another one is for fetching image
4. There is a context for passing data from hooks to navbar.
