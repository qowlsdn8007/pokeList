import { ComponentPropsWithRef } from 'react';

export interface IPokeProps extends IPoke, ComponentPropsWithRef<'div'> {
  textOverFlow?: boolean;
}

export interface IPoke {
  pokeClassId: number;
  pokeClassName: string;
  pokeModel?: string;
  image: string;
  price: number;
  discountPercent: number;
  pokeTypeTags: string[];
}
