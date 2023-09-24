'use client'
import Pagination from '@/components/common/Pagination'
import { useState } from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductCard from '@/components/product/ProductCard';
import PageHeading from '@/components/common/PageHeading';

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSort, setSelectedSort] = useState('recommanded');
  const CATEGORY_LIST = [
    { id: 1, name: 'Mini Plants', value: 'miniPlants' },
    { id: 2, name: 'Outdoor Plants', value: 'outdoorPlants' },
    { id: 3, name: 'Floor Plants', value: 'floorPlants' },
    { id: 4, name: 'Lower Light Indoor Plants', value: 'lowerLightIndoorPlants' },
    { id: 5, name: 'Rare Indoor Plants', value: 'rareIndoorPlants' },
    { id: 6, name: 'Pots', value: 'pots' },
    { id: 7, name: 'Gifts', value: 'gifts' },
    { id: 8, name: 'Sale', value: 'sale' }
  ]

  const SORT_LIST = [
    { id: 1, name: 'Recommended', value: 'recommanded' },
    { id: 2, name: 'Increasing Price', value: 'increasingPrice' },
    { id: 3, name: 'Decreasing Price', value: 'decreasingPrice' },
    { id: 4, name: 'A - Z', value: 'a2z' },
    { id: 5, name: 'Z - A', value: 'z2a' }
  ]

  const defaultCategoryClasses = 'block font-medium text-gray-500 dark:text-gray-300 hover:underline hover:font-semibold hover:cursor-pointer';

  const tempProductlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <main className="flex flex-col items-center justify-between p-24 py-8">
        <div className="px-6 self-start font-semibold lg:block hidden">
          <Breadcrumb />
        </div>
        <PageHeading title='All plants colection' subTitle="The Shop" />
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 lg:block hidden">
              <a
                className={ selectedFilter === 'all' ? `${defaultCategoryClasses} text-brand-green font-semibold underline` : defaultCategoryClasses}
                onClick={() => setSelectedFilter('all')}
              >
                All Plants
              </a>
              {
                CATEGORY_LIST.map((category) => (
                  <a
                    key={category.id}
                    className={ selectedFilter === category.value ? `${defaultCategoryClasses} text-brand-green font-semibold underline` : defaultCategoryClasses}
                    onClick={() => setSelectedFilter(category.value)}
                  >
                    {category.name}
                  </a>
                ))
              }
            </div>
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase">
                <p className="text-gray-500 dark:text-gray-300">{tempProductlist.length} Items</p>
                <div className="flex items-center">
                  <p className="text-gray-500 dark:text-gray-300">Sort</p>
                  <select
                    className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none hover:cursor-pointer"
                  >
                    {SORT_LIST?.map((sort) => (
                      <option
                        key={sort.id}
                        value={sort.value}
                        onChange={(e: any) => setSelectedSort(e.target.value)}
                      >
                        {sort.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-10 mt-5 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                {tempProductlist.map((item: any, index: number) => (
                  <ProductCard key={item} isSaleOff={index === 1}/>
                ))}
              </div>
            </div>
          </div>
          <Pagination className="flex justify-center mt-16" />
        </div>
      </main>
    </>
  )
}

