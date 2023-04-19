import { ComponentPropsWithRef } from 'react';

export interface ICarProps extends ICar, ComponentPropsWithRef<'div'> {
  textOverFlow?: boolean;
}

export interface ICar {
  carClassId: number;
  carClassName: string;
  carModel?: string;
  image: string;
  drivingDistance: number;
  year: number;
  price: number;
  discountPercent: number;
  regionGroups: string[];
  carTypeTags: string[];
}
