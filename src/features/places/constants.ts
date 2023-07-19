/* eslint-disable @typescript-eslint/naming-convention */
import { CategoryData } from './types';

export const INTERIORS_MIN_ZOOM = 18.6;
export const MAX_ZOOM = 24;
export const MARKERS_MIN_ZOOM = 15;
export const CATEGORIES_DATA: Record<string, CategoryData> = {
  VERT: {
    icon: 'stairs',
    color: 'gray',
    priority: 100,
    children: {
      SCALA: {},
    },
  },
  SERV: {
    icon: 'pin',
    color: 'gray',
    priority: 90,
    children: {
      'PUNTO H2O': { icon: 'water', color: 'lightBlue', priority: 20 },
      WC: { icon: 'restroom', color: 'green', shade: 600 },
      WC_F: { icon: 'restroom', color: 'green', shade: 600 },
      WC_H: { icon: 'restroom', color: 'green', shade: 600 },
      WC_M: { icon: 'restroom', color: 'green', shade: 600 },
    },
  },
  SUPP: {
    icon: 'pin',
    color: 'gray',
    priority: 100,
    children: {
      S_CONFEREN: { icon: 'conference' },
    },
  },
  UFF: {
    icon: 'pin',
    color: 'gray',
    priority: 60,
    children: {},
  },
  AULA: {
    icon: 'classroom',
    color: 'navy',
    priority: 40,
    children: {
      AULA: {},
      AULA_DIS: {},
      AULA_INF: {},
      AULA_LAB: {},
    },
  },
  LAB: {
    icon: 'lab',
    color: 'navy',
    priority: 60,
    children: {},
  },
  STUD: {
    icon: 'study',
    color: 'navy',
    priority: 40,
    children: {
      BIBLIO: { icon: 'library' },
      STUD_EST_A: {},
      STUD_EST_P: {},
      S_STUD: {},
    },
  },
  TECN: {
    icon: 'pin',
    color: 'gray',
    priority: 100,
    children: {},
  },
  SPEC: {
    icon: 'service',
    color: 'red',
    priority: 60,
    children: {
      BAR: { icon: 'bar' },
      SALA_BAR: { icon: 'bar' },
      MENSA: { icon: 'restaurant' },
      RISTORA: { icon: 'restaurant' },
      Z_RIST: { icon: 'restaurant' },
      CEN_STAMP: { icon: 'print' },
      INFERM: { icon: 'medical' },
      POSTA: { icon: 'post' },
    },
  },
  TBD: {
    icon: 'pin',
    color: 'gray',
    priority: 100,
    children: {},
  },
  EST: {
    icon: 'pin',
    color: 'gray',
    priority: 100,
    children: {
      PARK_BIKE: { icon: 'bike' },
    },
  },
};
