"use client";

import { useState } from "react";
import AffiliateMarketing from "@/components/icons/resources/AffiliateMarketing";
import AllIcon from "@/components/icons/resources/AllIcon";
import Announcement from "@/components/icons/resources/Announcement";
import Ecommerce from "@/components/icons/resources/Ecommerce";
import EdTech from "@/components/icons/resources/EdTech";
import HeathTech from "@/components/icons/resources/HeathTech";
import Whatsapp from "@/components/icons/resources/Whatsapp";
import Image from "next/image";
import React from "react";

type CategoryName =
  | "all"
  | "whatsapp"
  | "ecommerce"
  | "edtech"
  | "healthtech"
  | "affiliate"
  | "announcement";

interface CategoryCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  categoryName: CategoryName;
  isSelected: boolean;
  onClick: (category: CategoryName) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  title,
  description,
  categoryName,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`w-full sm:w-[302px] h-20 border rounded-[10px] flex items-center gap-3 p-5 cursor-pointer transition-all duration-200 
            ${
              isSelected ? "border-[#BBF7D0] bg-[#F0FDF4]" : "border-[#E5E7EB]"
            } 
            hover:shadow-md hover:scale-[1.02] hover:border-[#BBF7D0] hover:bg-[#F6FEF9]`}
      onClick={() => onClick(categoryName)}
    >
      <Icon />
      <div>
        <h1 className="text-[#111827] text-sm font-semibold">{title}</h1>
        <p className="text-[#4B5563] text-xs leading-4 font-normal font-[Inter] mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const ExploreByCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(
    null
  );

  const handleCategoryClick = (category: CategoryName) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="container pb-10">
      <h2 className="text-[#111827] text-4xl font-medium font-poppins text-center">
        Explore by Category
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/images/resources/explorebycategory.png"
          alt="Explore categories image"
          width={599}
          height={398}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <CategoryCard
            icon={AllIcon}
            title="All"
            description="View all content"
            categoryName="all"
            isSelected={selectedCategory === "all"}
            onClick={handleCategoryClick}
          />
          <CategoryCard
            icon={Whatsapp}
            title="WhatsApp Marketing"
            description="Marketing via WhatsApp"
            categoryName="whatsapp"
            isSelected={selectedCategory === "whatsapp"}
            onClick={handleCategoryClick}
          />
          <CategoryCard
            icon={Ecommerce}
            title="E-commerce"
            description="Online business solutions"
            categoryName="ecommerce"
            isSelected={selectedCategory === "ecommerce"}
            onClick={handleCategoryClick}
          />
          <CategoryCard
            icon={EdTech}
            title="Ed-tech"
            description="Educational technology"
            categoryName="edtech"
            isSelected={selectedCategory === "edtech"}
            onClick={handleCategoryClick}
          />
          <CategoryCard
            icon={HeathTech}
            title="Health-tech"
            description="Health technology solutions"
            categoryName="healthtech"
            isSelected={selectedCategory === "healthtech"}
            onClick={handleCategoryClick}
          />
          <CategoryCard
            icon={AffiliateMarketing}
            title="Affiliate Marketing"
            description="Marketing through affiliates"
            categoryName="affiliate"
            isSelected={selectedCategory === "affiliate"}
            onClick={handleCategoryClick}
          />
          <CategoryCard
            icon={Announcement}
            title="Announcement"
            description="Official updates & notifications"
            categoryName="announcement"
            isSelected={selectedCategory === "announcement"}
            onClick={handleCategoryClick}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategories;
