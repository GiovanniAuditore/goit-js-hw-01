const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Отримання елементу ul.gallery з DOM
const galleryElement = document.querySelector('.gallery');

// Створення фрагмента документу для додавання всіх зображень за одну операцію
const fragment = document.createDocumentFragment();

// Проходження по масиву images та створення елементів для кожного зображення
images.forEach(image => {
  const liElement = document.createElement('li');
  const imgElement = document.createElement('img');

  // Додавання атрибутів та опису до тегу <img>
  imgElement.src = image.url;
  imgElement.alt = image.alt;

  // Додавання <img> до <li>
  liElement.appendChild(imgElement);

  // Додавання <li> до фрагмента документу
  fragment.appendChild(liElement);
});

// Додавання фрагмента до ul.gallery за одну операцію
galleryElement.appendChild(fragment);

galleryElement.appendClass('container');


container.style.display = 'flex';

container.style.flexWrap = 'wrap';

container.style.gap = "25px";