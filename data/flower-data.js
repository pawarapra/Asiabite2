export const TESTALPHA = 'conan';

export function getAllFlowers(){
    return FLOWERDATA;
}

export function getFlowerById(id){

    return FLOWERDATA.find(item => item.id === id);    
}

export const FLOWERDATA = [
    {
      id: '001',
      title: 'Flower 1',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-01-md.png',
      description: 'I don\'t know some kind of daisy maybe? I\'m not a florist.',
    },
    {
      id: '002',
      title: 'Flower 2',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-02-md.png',
      description: 'A pink rose',
    },
    {
      id: '003',
      title: 'Flower 3',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-03-md.png',
      description: 'A violet? Could be I can\'t say for sure.',
    },
    {
      id: '004',
      title: 'Flower 4',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-04-md.png',
      description: 'I\'ll say a lily, but most likely I\'m wrong',
    },
    {
      id: '005',
      title: 'Flower 5',
      imageUri: 'https://media.mdia.ca/img/flowers/flower-05-md.png',
      description: 'An orange rose.  Kinda creepy no?',
    },
];