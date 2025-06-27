# Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Setup

We recommend using pnpm as your package manager, as it's faster and more efficient than npm or yarn. If you don't have pnpm installed, you can install it globally by running:

`npm install -g pnpm`

Run the command in the project folder to create the project.

`npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm`

This command uses `create-next-app`, a Command Line Interface (CLI) tool that sets up a Next.js application for you. In the command above, you're also using the `--example` flag with the starter example for this course.

To run the app: `npm run dev`

## Folder Structure

1. `/app`: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
2. `/app/lib`: Contains functions used in your application, such as reusable utility functions and data fetching functions.
3. `/app/ui`: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
4. `/public`: Contains all the static assets for your application, such as images.
5. Config Files: You'll also notice config files such as next.config.ts at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

## Placeholder data

When you're building user interfaces, it helps to have some placeholder data. If a database or API is not yet available, you can:

    Use placeholder data in JSON format or as JavaScript objects.
    Use a 3rd party service like mockAPI.

For this project, we've provided some placeholder data in app/lib/placeholder-data.ts. Each JavaScript object in the file represents a table in your database. For example, for the invoices table:

## TypeScript

You may also notice most files have a `.ts` or `.tsx` suffix. This is because the project is written in `TypeScript`. We wanted to create a course that reflects the modern web landscape.

It's okay if you don't know TypeScript - we'll provide the TypeScript code snippets when required.

For now, take a look at the `/app/lib/definitions.ts` file. Here, we manually define the types that will be returned from the database. For example, the invoices table has the following types:

```ts
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
```

If you're a TypeScript developer, we're manually declaring the data types, but for better type-safety, we recommend Prisma or Drizzle, which automatically generates types based on your database schema.

Next.js detects if your project uses TypeScript and automatically installs the necessary packages and configuration. Next.js also comes with a TypeScript plugin for your code editor, to help with auto-completion and type-safety.

## Running the development server

1. Run `pnpm i` to install the project's packages.
2. Followed by `pnpm dev` to start the development server.

## Global styles

If you look inside the `/app/ui` folder, you'll see a file called `global.css`. You can use this file to add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.

You can import `global.css` in any component in your application, but it's usually good practice to add it to your top-level component. In Next.js, this is the root layout (more on this later).

Add global styles to your application by navigating to `/app/layout.tsx` and importing the `global.css` file.

## Tailwind

Tailwind is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your React code.

In Tailwind, you style elements by adding class names. For example, adding "text-blue-500" will turn the `<h1>` text blue:

```html
<h1 className="text-blue-500">I'm blue!</h1>
```

Although the CSS styles are shared globally, each class is singularly applied to each element. This means if you add or delete an element, you don't have to worry about maintaining separate stylesheets, style collisions, or the size of your CSS bundle growing as your application scales.

When you use create-next-app to start a new project, Next.js will ask if you want to use Tailwind. If you select yes, Next.js will automatically install the necessary packages and configure Tailwind in your application.

If you look at `/app/page.tsx`, you'll see that we're using Tailwind classes in the example.

```tsx
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
 
export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}
```
## CSS Modules

CSS Modules allow you to scope CSS to a component by automatically creating unique class names, so you don't have to worry about style collisions as well.

We'll continue using Tailwind in this course, but let's take a moment to see how you can achieve the same results from the quiz above using CSS modules.

Inside `/app/ui`, create a new file called `home.module.css` and add the following CSS rules:

```css
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

Then, inside your /app/page.tsx file import the styles and replace the Tailwind class names from the <div> you've added with styles.shape:

```tsx
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
    // ...
  )
}
```

Tailwind and CSS modules are the two most common ways of styling Next.js applications. Whether you use one or the other is a matter of preference - you can even use both in the same application!

## Using the clsx library to toggle class names

`clsx` is a library that lets you toggle class names easily.

here's the basic usage:

Suppose that you want to create an `InvoiceStatus` component which accepts `status`. The status can be `'pending'` or `'paid'`.

If it's `'paid'`, you want the color to be green. If it's `'pending'`, you want the color to be gray.

You can use clsx to conditionally apply the classes, like this:

```tsx
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}
```
## Other styling solutions

In addition to the approaches we've discussed, you can also style your Next.js application with:

* Sass which allows you to import `.css` and `.scss` files.
* CSS-in-JS libraries such as styled-jsx, styled-components, and emotion.

Take a look for mode details: https://nextjs.org/docs/app/building-your-application/styling

## Optimizing Fonts and Images

### Why does it matter to optimize fonts?

Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded.

Cumulative Layout Shift is a metric used by Google to evaluate the performance and user experience of a website. With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. This swap can cause the text size, spacing, or layout to change, shifting elements around it.

Next.js automatically optimizes fonts in the application when you use the next/font module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

## Adding a primary font

In your `/app/ui` folder, create a new file called `fonts.ts`. You'll use this file to keep the fonts that will be used throughout your application.

Import the `Inter` font from the `next/font/google` module - this will be your primary font. Then, specify what subset you'd like to load. In this case, `'latin'`.

Finally, add the font to the `<body>` element in `/app/layout.tsx`.

```ts
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

By adding Inter to the `<body>` element, the font will be applied throughout your application. Here, you're also adding the Tailwind `antialiased` class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.

Navigate to your browser, open dev tools and select the body element. You should see `Inter` and `Inter_Fallback` are now applied under styles.

## Why optimize images?

Next.js can serve static assets, like images, under the top-level /public folder. Files inside /public can be referenced in your application.

With regular HTML, you would add an image as follows:

```html
<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>
```

However, this means you have to manually:

* Ensure your image is responsive on different screen sizes.
* Specify image sizes for different devices.
* Prevent layout shift as the images load.
* Lazy load images that are outside the user's viewport.

Image Optimization is a large topic in web development that could be considered a specialization in itself. Instead of manually implementing these optimizations, you can use the `next/image` component to automatically optimize your images.

## The `<Image>` component

The `<Image>` Component is an extension of the HTML `<img>` tag, and comes with automatic image optimization, such as:

* Preventing layout shift automatically when images are loading.
* Resizing images to avoid shipping large images to devices with a smaller viewport.
* Lazy loading images by default (images load as they enter the viewport).
* Serving images in modern formats, like `WebP` and `AVIF`, when the browser supports it.

## Adding the desktop hero image

Let's use the `<Image>` component. If you look inside the `/public` folder, you'll see there are two images: `hero-desktop.png` and `hero-mobile.png`. These two images are completely different, and they'll be shown depending if the user's device is a desktop or mobile.

In your `/app/page.tsx` file, import the component from `next/image`. Then, add the image under the comment.

Here, you're setting the width to 1000 and height to 760 pixels. It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image. These values are not the size the image is rendered, but instead the size of the actual image file used to understand the aspect ratio.

You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens.

Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.

## Creating Layouts and Pages

So far, your application only has a home page. Let's learn how you can create more routes with layouts and pages.

## Nested routing

Next.js uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment.

You can create separate UIs for each route using `layout.tsx` and `page.tsx` files.

`page.tsx` is a special Next.js file that exports a React component, and it's required for the route to be accessible. In your application, you already have a page file: `/app/page.tsx` - this is the home page associated with the route /.

To create a nested route, you can nest folders inside each other and add `page.tsx` files inside them.

![alt text](docs/dashboard-route.avif)

`/app/dashboard/page.tsx` is associated with the `/dashboard path`.

This is how you can create different pages in Next.js: create a new route segment using a folder, and add a page file inside it.

By having a special name for `page` files, Next.js allows you to colocate UI components, test files, and other related code with your routes. Only the content inside the `page` file will be publicly accessible. For example, the `/ui` and `/lib` folders are colocated inside the /app folder along with your routes.

## Creating the dashboard layout

Dashboards have some sort of navigation that is shared across multiple pages. In Next.js, you can use a special `layout.tsx` file to create UI that is shared between multiple pages. Let's create a layout for the dashboard pages!

Inside the `/dashboard` folder, add a new file called `layout.tsx` and paste the following code:

```tsx
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

A few things are going on in this code, so let's break it down:

First, you're importing the `<SideNav />` component into your layout. Any components you import into this file will be part of the layout.

The `<Layout />` component receives a children prop. This child can either be a page or another layout. In your case, the pages inside `/dashboard` will automatically be nested inside a `<Layout />` like so:

![alt text](docs/shared-layout.avif)

One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called `partial rendering` which preserves client-side React state in the layout when transitioning between pages.

![alt text](docs/partial-rendering-dashboard.avif)

## Root Layout

Above, we imported the Inter font into another layout: `/app/layout.tsx`. As a reminder:

```tsx
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

This is called a root layout and is required in every Next.js application. Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your `<html>` and `<body>` tags, and add metadata.

Since the new layout you've just created `(/app/dashboard/layout.tsx)` is unique to the dashboard pages, you don't need to add any UI to the root layout above.

## Navigating Between Pages

Above, you created the dashboard layout and pages. Now, let's add some links to allow users to navigate between the dashboard routes.

## Why optimize navigation?

To link between pages, you'd traditionally use the `<a>` HTML element. At the moment, the sidebar links use `<a>` elements, but notice what happens when you navigate between the home, invoices, and customers pages on your browser.

Did you see it?

There's a full page refresh on each page navigation!

## The `<Link>` component

In Next.js, you can use the` <Link />` Component to link between pages in your application. `<Link>` allows you to do client-side navigation with JavaScript.

To use the `<Link />` component, open `/app/ui/dashboard/nav-links.tsx`, and import the Link component from `next/link`. Then, replace the `<a>` tag with `<Link>.`

As you can see, the Link component is similar to using `<a>` tags, but instead of `<a href="…">`, you use `<Link href="…">`.

Save your changes and check to see if it works in your localhost. You should now be able to navigate between the pages without seeing a full refresh. Although parts of your application are rendered on the server, there's no full page refresh, making it feel like a native web app. Why is that?

## Automatic code-splitting and prefetching

To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React `SPA`
, where the browser loads all your application code on the initial page load.

Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work. This is also less code for the browser to parse, which makes your application faster.

Furthermore, in production, whenever `<Link>` components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

## Pattern: Showing active links

A common UI pattern is to show an active link to indicate to the user what page they are currently on. To do this, you need to get the user's current path from the URL. Next.js provides a hook called `usePathname()` that you can use to check the path and implement this pattern.

Since `usePathname()` is a React hook, you'll need to turn `nav-links.tsx` into a Client Component. Add React's `"use client"` directive to the top of the file, then import `usePathname() from next/navigation`.

Next, assign the path to a variable called pathname inside your `<NavLinks />` component:

Note: `nav-links.tsx` is not a special file for Next.js — it can be named whatever you want. If you rename it, ensure that you update the import statements accordingly.

You can use the `clsx` library introduced in the chapter on CSS styling to conditionally apply class names when the link is active.

When `link.href` matches the pathname, the link should be displayed with blue text and a light blue background.

```tsx
'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

## Setting Up Your Database

Before you can continue working on your dashboard, you'll need some data. In this chapter, you'll be setting up a PostgreSQL database from one of `Vercel's marketplace integrations` (https://vercel.com/marketplace?category=databases).

If you're already familiar with PostgreSQL and would prefer to use your own database provider, you can skip this chapter and set it up on your own. Otherwise, let's continue!
