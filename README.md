## Aframe-next-static-ar

A project to test very basic Next.js and A-Frame, with AR.js.


forked initially from: https://github.com/michaltakac/aframe-next-static

### Libraries

- [A-Frame](https://aframe.io)
- [Next.js](https://github.com/zeit/next.js)

### Notes

This project uses static exporting feature from Next.js. If you wan't to build a Multiverse of multiple "pages" or "routes" (or should I say worlds?) and navigate through them, you need to provide a map of the routes in `next.config.js`. Read more info [here](https://github.com/zeit/next.js#static-html-export).

Note: Next.js is universal, which means it executes code first server-side, then client-side. The window object is only present client-side, so if you absolutely need to have access to it in some React component, you should put that code in `componentDidMount`. Check the `/pages/index.js` how we're doing it right now. You can load A-Frame-specific librabries like that. More info [here](https://github.com/zeit/next.js/wiki/FAQ#i-use-a-library-which-throws-window-is-undefined).
