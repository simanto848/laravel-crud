# Laravel CRUD with React Starter Kit

This is a simple CRUD (Create, Read, Update, Delete) application built with [Laravel](https://laravel.com/) and the [React Starter Kit](https://laravel.com/docs/12.x/starter-kits#laravel-with-inertia-and-react) using [Inertia.js](https://inertiajs.com/). It allows authenticated users to manage their blog posts, with a modern frontend powered by React and Tailwind CSS, and a backend leveraging Laravel's powerful features.

## Features

- **Authentication**: Built-in Laravel authentication with middleware protection.
- **CRUD Operations**: Create, read, update, and delete posts, restricted to the authenticated user's own posts.
- **Frontend**: React components with Inertia.js for seamless server-driven rendering.
- **Styling**: Tailwind CSS with 3D-like effects for a polished UI.
- **Validation**: Server-side validation using Laravel Form Requests.
- **Responsive Design**: Mobile-friendly layout with Tailwind utilities.

## Tech Stack

- **Backend**: Laravel 12.x, PHP 8.3+
- **Frontend**: React 18.x, Inertia.js, Tailwind CSS
- **Build Tool**: Vite
- **Database**: MySQL (configurable via `.env`)

## Prerequisites

- PHP >= 8.3
- Composer
- Node.js >= 18.x
- NPM or Yarn
- MySQL or another supported database

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/laravel-react-crud.git
    cd laravel-react-crud
    ```
