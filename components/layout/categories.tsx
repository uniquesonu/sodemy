import React from 'react';

const Categories = () => {
  const categoriesData = [
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
      type: "Design"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
      type: "Web development"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
      type: "Marketing"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
      type: "IT and software"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
      type: "Design"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
      type: "Web development"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
      type: "Marketing"
    },
    {
      image: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
      type: "IT and software"
    }
  ];

  return (
    <div className="flex flex-col gap-4 ml-4 mr-4 p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl mt-6 font-bold">
          Top Categories
        </h2>
        <div className='grid grid-cols-4 gap-4'>
          {categoriesData.map((category, index) => (
            <div key={index} className="flex flex-col items-start gap-2">
              <img src={category.image} alt={category.type} className="w-full h-auto rounded-xl" />
              <h4 className="text-foreground font-semibold">{category.type}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
