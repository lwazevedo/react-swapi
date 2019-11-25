const title = 'SWAPI';
const subTitle = 'The Star Wars Api';
const listTypes = [{
  id: 'films',
  label: 'Films',
  route: '/films',
  routeId: '/films/:id',
},
{
  id: 'people',
  label: 'Characters',
  route: '/people',
  routeId: '/people/:id',
},
{
  id: 'starships',
  label: 'Starships',
  route: '/starships',
  routeId: '/starships/:id',
},
{
  id: 'vehicles',
  label: 'Vehicles',
  route: '/vehicles',
  routeId: '/vehicles/:id',
},
{
  id: 'species',
  label: 'Species',
  route: '/species',
  routeId: '/species/:id',
},
{
  id: 'planets',
  label: 'Planets',
  route: '/planets',
  routeId: '/planets/:id',
}];

const messages = {
  SEARCH_FAILED: 'Could not execute the search.',
  SEARCH_NOT_FOUND: 'Not found data.',
};

const btnDetails = {
  films: [
    'Characters',
    'Planets',
    'Species',
    'Starships',
    'Vehicles'
  ],
  starships: [
    'Films'
  ],
  people: [
    'Films',
    'Species',
    'Starships',
    'Vehicles'
  ],
  vehicles: [
    'Films'
  ],
  species:[
    'Films',
    'People'
  ],
  planets:[
    'Films',
    'Residents'
  ]
};

export { title, subTitle, listTypes, messages, btnDetails };