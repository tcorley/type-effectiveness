import { Type } from '../types/d';

const types: Type[] = [
  {
    name: 'Normal',
    immuneTo: ['Ghost'],
    weakTo: ['Fighting'],
    resistantAgainst: []
  },
  {
    name: 'Fire',
    immuneTo: [],
    weakTo: ['Water', 'Ground', 'Rock'],
    resistantAgainst: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy']
  },
  {
    name: 'Water',
    immuneTo: [],
    weakTo: ['Grass', 'Electric'],
    resistantAgainst: ['Fire', 'Water', 'Ice', 'Steel']
  },
  {
    name: 'Electric',
    immuneTo: [],
    weakTo: ['Ground'],
    resistantAgainst: ['Electric', 'Flying', 'Steel']
  },
  {
    name: 'Grass',
    immuneTo: [],
    weakTo: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
    resistantAgainst: ['Water', 'Grass', 'Electric', 'Ground']
  },
  {
    name: 'Ice',
    immuneTo: [],
    weakTo: ['Fire', 'Fighting', 'Rock', 'Steel'],
    resistantAgainst: ['Ice']
  },
  {
    name: 'Fighting',
    immuneTo: [],
    weakTo: ['Flying', 'Psychic', 'Fairy'],
    resistantAgainst: ['Bug', 'Rock', 'Dark']
  },
  {
    name: 'Poison',
    immuneTo: [],
    weakTo: ['Ground', 'Psychic'],
    resistantAgainst: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy']
  },
  {
    name: 'Ground',
    immuneTo: ['Electric'],
    weakTo: ['Water', 'Grass', 'Ice'],
    resistantAgainst: ['Poison', 'Rock']
  },
  {
    name: 'Flying',
    immuneTo: ['Ground'],
    weakTo: ['Electric', 'Ice'],
    resistantAgainst: ['Grass', 'Fighting', 'Bug']
  },
  {
    name: 'Psychic',
    immuneTo: [],
    weakTo: ['Bug', 'Ghost', 'Dark'],
    resistantAgainst: ['Fighting', 'Psychic']
  },
  {
    name: 'Bug',
    immuneTo: [],
    weakTo: ['Fire', 'Flying', 'Rock'],
    resistantAgainst: ['Grass', 'Fighting', 'Ground']
  },
  {
    name: 'Rock',
    immuneTo: [],
    weakTo: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
    resistantAgainst: ['Normal', 'Fire', 'Poison', 'Flying']
  },
  {
    name: 'Ghost',
    immuneTo: ['Normal', 'Fighting'],
    weakTo: ['Ghost', 'Dark'],
    resistantAgainst: ['Poison', 'Bug']
  },
  {
    name: 'Dragon',
    immuneTo: [],
    weakTo: ['Ice', 'Dragon', 'Fairy'],
    resistantAgainst: ['Fire', 'Water', 'Grass', 'Electric']
  },
  {
    name: 'Dark',
    immuneTo: ['Psychic'],
    weakTo: ['Fighting', 'Bug', 'Fairy'],
    resistantAgainst: ['Ghost', 'Dark']
  },
  {
    name: 'Steel',
    immuneTo: ['Poison'],
    weakTo: ['Fire', 'Fighting', 'Ground'],
    resistantAgainst: [
      'Normal',
      'Grass',
      'Ice',
      'Flying',
      'Psychic',
      'Bug',
      'Rock',
      'Dragon',
      'Steel',
      'Fairy'
    ]
  },
  {
    name: 'Fairy',
    immuneTo: ['Dragon'],
    weakTo: ['Poison', 'Steel'],
    resistantAgainst: ['Fighting', 'Bug', 'Dark']
  }
];

export default types;
