// Отримуємо список всіх категорій (елементів li.item) за їх id
const categoriesList = document.getElementById('categories');


const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Кількість категорій: ${categoryItems.length}`);


categoryItems.forEach(categoryItem => {

  const categoryTitle = categoryItem.querySelector('h2').textContent;


  const subCategoryItems = categoryItem.querySelectorAll('li');


  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів у категорії: ${subCategoryItems.length}`);
});