import React from "react";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";

async function getCategories() {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await res.json();
    return data.data;
}

async function getNewsByCategoryId(category_id) {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
    const data = await res.json();
    return data.data;
}

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id);

    return (
        <div className="grid grid-cols-12 gap-4 mx-4 mt-4">
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="col-span-6">
                <h2 className="text-lg font-bold">All News</h2>
                <div>
                    {news.length > 0 ? (
                        news.map(n => {
                            return <NewsCard key={n._id} news={n}></NewsCard>;
                        })
                    ) : (
                        <h2 className="flex justify-center items-center text-4xl text-center font-bold my-8">
                            No News Found!
                        </h2>
                    )}
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;
