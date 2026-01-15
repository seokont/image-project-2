import { Element } from './entities/element.entity';

export const elementsProviders = [
  {
    provide: 'ELEMENTS_REPOSITORY',
    useValue: Element,
  },
];
