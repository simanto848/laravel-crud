import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
    {
        title: 'Edit Post',
        href: '/posts/edit',
    },
];

interface Post {
    id: number;
    title: string;
    content: string;
}

export default function CreatePost({ post }: { post: Post }) {
    const { data, setData, processing, put, errors, reset } = useForm({
        title: '',
        content: '',
    });

    useEffect(() => {
        setData('title', post.title);
        setData('content', post.content);
    }, [post, setData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('posts.update', post.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />
            <div className="container mx-auto max-w-2xl p-6">
                <div className="hover:shadow-3xl perspective-1000 relative transform rounded-xl bg-white p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-x-2 dark:bg-neutral-800">
                    <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-gray-100">Update Post</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group relative">
                            <label
                                htmlFor="title"
                                className="mb-1 block text-sm font-medium text-gray-700 transition-all group-hover:text-indigo-500 dark:text-gray-300"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full transform rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 shadow-inner transition-all duration-200 outline-none group-hover:-translate-y-1 group-hover:shadow-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-neutral-600 dark:bg-neutral-700"
                                placeholder="Enter your post title"
                                disabled={processing}
                            />
                            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                        </div>

                        <div className="group relative">
                            <label
                                htmlFor="content"
                                className="mb-1 block text-sm font-medium text-gray-700 transition-all group-hover:text-indigo-500 dark:text-gray-300"
                            >
                                Content
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={data.content}
                                onChange={(e) => setData('content', e.target.value)}
                                className="min-h-[150px] w-full transform resize-y rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 shadow-inner transition-all duration-200 outline-none group-hover:-translate-y-1 group-hover:shadow-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:border-neutral-600 dark:bg-neutral-700"
                                placeholder="Write your content here..."
                                disabled={processing}
                            />
                            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Link
                                href={route('posts.index')}
                                className="inline-block transform rounded-lg bg-gray-600 px-6 py-2 font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg active:translate-y-0 active:shadow-sm"
                            >
                                Back
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-block transform rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg active:translate-y-0 active:shadow-sm disabled:bg-gray-400"
                            >
                                {processing ? 'Updateing...' : 'Update Post'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
