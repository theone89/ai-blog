import React from 'react';
import PhotoComp from './PhotoComp';

const BlogPost = ({ blog, data }) => {
    return (
        <div className="prose lg:prose-xl mx-auto">
            <div className="text-start p-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                    {blog.title}
                </h1>
                <p className="text-xl md:text-4xl font-bold">
                    {blog?.subtitle}
                </p>
            </div>
            <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-500">
                    Publicado el {blog?.date}
                </h3>
                <h3 className="text-xl font-semibold mb-2">{blog?.author}</h3>
            </div>
            <div className="mb-4">
                {!data?.response?.results[0]?.id ? "IsLoading..." : (
                    <PhotoComp
                        size={{ width: 500, height: 500 }}
                        style={"w-full object-cover h-96 shadow-lg"}
                        key={data?.response?.results[0]?.id}
                        photo={data?.response?.results[0]}
                    />
                )}
                <div className="mx-auto">
                    <p className="text-xs mt-8">Tags:</p>
                    {blog?.keywords?.map((keyword, index) => (
                        <div key={index} className="inline-block">
                            <button className="bg-blue-200/30 border-orange-400 shadow-md border-b-2 hover:bg-blue-400 hover:shadow-xl hover:scale-95 shadow-blue-900 hover:animate-pulse text-blue-800 p-1 m-1 rounded">{keyword}</button>
                        </div>
                    ))}
                </div>
            </div>
            <article className="text-justify prose prose-gray mx-auto max-w-3xl py-12 dark:prose-invert">
                <p className="mb-4"><span className="mb-4 font-semibold text-xl">{blog?.text?.introduction?.split(' ')[0]}</span> {blog?.text?.introduction?.split(" ").slice(1).join(" ")}</p>
                <div className="text-justify md:grid md:grid-cols-2 gap-1 mx-2">
                    <div className="mr-2">
                        {!data?.response?.results[1]?.id ? "IsLoading..." : (
                            <PhotoComp
                                size={{ width: 500, height: 500 }}
                                style={"object-cover"}
                                key={data?.response?.results[1]?.id}
                                photo={data?.response?.results[1]}
                            />
                        )}
                        <p className="mb-4"><span className="mb-4 font-semibold text-lg">{blog?.text?.development?.split(' ')[0]}</span> {blog?.text?.development?.split(" ").slice(1).join(" ")}</p>
                    </div>
                    <div>
                        <p className="mb-4"><span className="mb-4 font-semibold text-lg">{blog?.text?.development2?.split(' ')[0]}</span> {blog?.text?.development2?.split(" ").slice(1).join(" ")}</p>
                        {!data?.response?.results[2]?.id ? "IsLoading..." : (
                            <PhotoComp
                                size={{ width: 500, height: 500 }}
                                style={"object-cover"}
                                key={data?.response?.results[2]?.id}
                                photo={data?.response?.results[2]}
                            />
                        )}
                    </div>
                </div>
                <p className="mb-4"><span className="mb-4 font-semibold text-lg">{blog?.text?.conclusions?.split(' ')[0]}</span> {blog?.text?.conclusions?.split(" ").slice(1).join(" ")}</p>
            </article>
        </div>
    );
};

export default BlogPost;