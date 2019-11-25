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
  species: [
    'Films',
    'People'
  ],
  planets: [
    'Films',
    'Residents'
  ]
};

const identifyType = {
  films: 'films',
  species: 'species',
  starships: 'starships',
  vehicles: 'vehicles',
  people: 'characters',
  residents: 'characters',
  characters: 'characters',
  planets: 'planets',
};

const identifyLabelField = {
  films: {
    'episode_id': 'Episode',
    'title': 'Title',
    'director': 'Director',
    'producer': 'Producer',
    'opening_crawl': 'Opening Crawl',
  },
  people: {
    name: 'Name',
    skin_color: 'Skin Color',
    gender: 'Gender',
    mass: 'Mass',
    height: 'Height',
  },
  characters: {
    name: 'Name',
    skin_color: 'Skin Color',
    gender: 'Gender',
    mass: 'Mass',
    height: 'Height',
  },
  planets: {
    name: 'Name',
    population: 'Population',
    orbital_period: 'Orbital Period',
    climate: 'Climate',
    terrain: 'Terrain',
  },
  species: {
    name: 'Name',
    classification: 'Classification',
    designation: 'Designation',
    language: 'Language',
    average_height: 'Average Height',
  },
  starships: {
    name: 'Name',
    manufacturer: 'Manufacturer',
    model: 'Model',
    max_atmosphering_speed: 'Max Atmosphering Speed',
    cost_in_credits: 'Cost in Credits',
  },
  vehicles: {
    name: 'Name',
    manufacturer: 'Manufacturer',
    model: 'Model',
    max_atmosphering_speed: 'Max Atmosphering Speed',
    cost_in_credits: 'Cost in Credits',
  }
}

export { title, subTitle, listTypes, messages, btnDetails, identifyType, identifyLabelField };