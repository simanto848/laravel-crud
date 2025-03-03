import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Post {
    id: number;
    title: string;
    content: string;
    user_id: number;
    created_at: string;
    updated_at: string;
}

interface PostsProps {
    posts: Post[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts({ posts }: PostsProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="container ms-auto p-4">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Blog Posts</h1>
                    <Link href="/posts/create" className="btn btn-primary">
                        Create Post
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Content</th>
                                <th className="px-4 py-2">Created At</th>
                                <th className="px-4 py-2">Updated At</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <tr key={post.id}>
                                        <td className="border px-4 py-2">{post.id}</td>
                                        <td className="border px-4 py-2">{post.title}</td>
                                        <td className="border px-4 py-2">{post.content}</td>
                                        <td className="border px-4 py-2">{formatDate(post.created_at)}</td>
                                        <td className="border px-4 py-2">{formatDate(post.updated_at)}</td>
                                        <td className="flex items-center justify-between border px-4 py-2">
                                            <Link
                                                href={`/posts/${post.id}/edit`}
                                                className="border bg-blue-700 px-2 py-1 text-white hover:bg-blue-500 hover:text-white"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                onClick={(e) => {
                                                    if (!confirm('Are you sure you want to delete this post?')) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                href={`/posts/${post.id}`}
                                                className="border bg-red-600 px-2 py-1 text-white hover:bg-red-500 hover:text-white"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="border px-4 py-2 text-center">
                                        No posts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
