import React from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/carrousel.css';
import * as s from './styled';

import drink from '../../assets/images/drink.svg';
import salgados from '../../assets/images/salgados-icon.svg';
import sanduiche from '../../assets/images/sanduiche-ico.svg';
import home from '../../assets/images/home-food.svg';
import { Category } from '../../contexts/DashboardContext';

export interface CategoryInfo {
  id: number;
  title: string;
  image: string;
}

type CarouselInput = {
  setCategory: (category: Category) => void;
};

export const categories: CategoryInfo[] = [
  {
    id: Category.All,
    title: 'Geral',
    image: home,
  },
  {
    id: Category.Bebidas,
    title: 'Bebidas',
    image: drink,
  },
  {
    id: Category.Salgados,
    title: 'Salgados',
    image: salgados,
  },
  {
    id: Category.Sanduiches,
    title: 'Sanduíches',
    image: sanduiche,
  },
];

const CategoryCarousel: React.FC<CarouselInput> = ({
  setCategory,
}: CarouselInput) => (
  <s.CategoryContainer>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={190}
      totalSlides={categories.length}
      visibleSlides={categories.length >= 5 ? 5 : categories.length}
      infinite
    >
      <Slider>
        {categories.map((category) => (
          <Slide index={category.id} key={category.id}>
            <s.CategoryItem onClick={() => setCategory(category.id)}>
              <header>
                <p>{category.title}</p>
                <img src={category.image} alt={category.title} />
              </header>
            </s.CategoryItem>
          </Slide>
        ))}
      </Slider>
      <ButtonBack className="buttonBack">
        <FiChevronLeft size="24px" color="grey" />
      </ButtonBack>
      <ButtonNext className="buttonNext">
        <FiChevronRight size="24px" color="grey" />
      </ButtonNext>
    </CarouselProvider>
  </s.CategoryContainer>
);

export default CategoryCarousel;
