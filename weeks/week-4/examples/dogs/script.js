const DOGS = [
  {
    name: 'Alfons',
    img: 'assets/dog1.jpg',
    fur: 'brown',
    puppy: false
  },
  {
    name: 'Bingo',
    img: 'assets/dog2.jpg',
    fur: 'brown',
    puppy: false,
  }, {
    name: 'Cecilia',
    img: 'assets/dog3.jpg',
    fur: 'mixed',
    puppy: true,
  }, {
    name: 'Doggo',
    img: 'assets/dog4.jpg',
    fur: 'black',
    puppy: true,
  }, {
    name: 'Eddie',
    img: 'assets/dog5.jpg',
    fur: 'grey',
    puppy: true,
  },
  {
    name: 'Flora',
    img: 'assets/dog6.jpg',
    fur: 'mixed',
    puppy: true,
  }, {
    name: 'Gullan',
    img: 'assets/dog7.jpg',
    fur: 'black',
    puppy: false,
  }
]

const faveDogs = []

const container = document.getElementById('container')
const favorites = document.getElementById('favorites')
const filterDropdown = document.getElementById('filterDropdown')


const loadDogs = (dogArray) => {
  container.innerHTML = ''
  dogArray.forEach((dog) => {
    container.innerHTML += `
      <div class="card">
        <p>${dog.name}</p>
        <button onclick="addToFaves('${dog.name}')">Add to favorites</button>
        <img src=${dog.img} alt=${dog.name}>
        <p>${dog.puppy ? 'PUPPY' : ''}</p>
      </div>
    `
  })
}

const filterDogs = () => {
  console.log('calling the filterDogs function')
  const value = filterDropdown.value

  if (value === 'all') {
    loadDogs(DOGS)
  } else {
    const filteredList = DOGS.filter((dog) => dog.fur === value)
    loadDogs(filteredList)
  }

}

const addToFaves = (dog) => {
  faveDogs.push(dog)
  loadFaves()
}

const loadFaves = () => {
  favorites.innerHTML = ''
  faveDogs.forEach((dog) => {
    favorites.innerHTML += `
        <p>${dog}</p> 
    `
  })
}

filterDropdown.addEventListener('change', filterDogs)


loadDogs(DOGS)