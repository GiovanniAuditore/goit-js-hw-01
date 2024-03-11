
const categoriesList = document.getElementById('categories');


const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(categoryItem => {

  const categoryTitle = categoryItem.querySelector('h2').textContent;


  const subCategoryItems = categoryItem.querySelectorAll('li');


  console.log(`Categories: ${categoryTitle}`);
  console.log(`Number of categories: ${subCategoryItems.length}`);
});
