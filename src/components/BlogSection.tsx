import { MoveUpRight } from "lucide-react";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Benefits of Investing in Unlisted Shares",
    href: "/blog-the-benefits-of-investing-in-unlisted-shares",
    description:
      "When it comes to investing, most people focus on publicly listed companies. However, there's a growing interest in unlisted shares, which offer unique advantages for savvy investors.",
    imageSrc:
      "https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66e05b2d6869246c1b9dc98a_saving-vs-investing.webp",
    imageAlt: "Saving vs Investing",
  },
  {
    id: 2,
    title: "Why Pre-IPO Shares Could Be Your Next Big Investment Opportunity",
    href: "/why-pre-ipo-shares-could-be-your-next-big-investment-opportunity",
    description:
      "As an investor, you're always looking for ways to maximize your returns while diversifying your portfolio.",
    imageSrc:
      "https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66e05b63e5ecdeaa245bae6c_26-jan-23-Where-To-Invest-Money-In-India-27.png",
    imageAlt: "Pre-IPO Shares",
  },
  {
    id: 3,
    title: "How to Evaluate the Value of Unlisted Shares Before Investing",
    href: "/blog-how-to-evaluate-the-value-of-unlisted-shares-before-investing",
    description:
      "Investing in unlisted shares can be highly rewarding, but it also requires a different approach compared.",
    imageSrc:
      "https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66e05b642cc06902a70a82ea_Where-to-Invest-your-Money-this-2023.jpg",
    imageAlt: "Evaluate Unlisted Shares",
  },
];

const BlogSection = () => {
  return (
    <div className="main-container py-8">
      <div className="text-center mb-8">
        <h1 className="text-xl md:text-4xl font-bold dark:text-white text-black">Our Blogs</h1>
        <p className="text-md md:text-lg text-gray-600 mt-2">Learn More about unlisted shares</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg overflow-hidden">
            <a href={blog.href}>
              <img
                src={blog.imageSrc}
                alt={blog.imageAlt}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
              <a href={blog.href} className="block">
                <h3 className="text-md md:text-md text-gray-500 font-semibold hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>
              </a>
              <MoveUpRight size={20} className="font-bold"/>
              </div>
              <p className="text-gray-700 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
