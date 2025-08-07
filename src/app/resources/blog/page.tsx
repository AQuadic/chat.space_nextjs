import BlogeHero from "@/components/resources/blogs/BlogeHero";
import ExploreByCategories from "@/components/resources/blogs/ExploreByCategories";
import RecentBlogs from "@/components/resources/blogs/RecentBlogs";
import TrendingBlogs from "@/components/resources/blogs/TrendingBlogs";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogeHero />
      <TrendingBlogs />
      <ExploreByCategories />
      <RecentBlogs />
    </div>
  );
};

export default page;
