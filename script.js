//هدا من اج كل تغيير
const featuredProperty = document.querySelector('.featured-property');

const properties = [
  {
    title: 'شقة فاخرة من 3 غرف نوم',
    description: 'مناسبة للعائلات الصغيرة. <a href="#">المزيد من التفاصيل</a>',
    image: 'img/img1.jpg',
    alt: 'Image description 1',
    link: '#', // Replace with appropriate link
    pree:'190DH',
    nopre:'290DH'
  },
  {
    title: 'فيلا فاخرة مع مسبح',
    description: 'مثالية لقضاء عطلة مميزة. <a href="#">المزيد من التفاصيل</a>',
    image: 'img/img2.jpg',
    alt: 'Image description 2',
    link: '#', // Replace with appropriate link
    pree:'290DH',
    nopre:'470DH'
  },
  {
    title: 'رياض تقليدي في طنجة',
    description: 'تجربة ثقافية فريدة. <a href="#">المزيد من التفاصيل</a>',
    image: 'img/img3.jpg',
    alt: 'Image description 3',
    link: '#', 
    pree:'320DH',
    nopre:'500DH'
  },
  //
];

let currentPropertyIndex = 0;

function changeFeaturedProperty() {
  const property = properties[currentPropertyIndex];

  featuredProperty.querySelector('h2').textContent = property.title;
  featuredProperty.querySelector('p').innerHTML = property.description;
  featuredProperty.querySelector('img').src = property.image;
  featuredProperty.querySelector('img').alt = property.alt;
  featuredProperty.querySelector('a').href = property.link;
  featuredProperty.querySelector('#pree').innerHTML = property.pree;
  featuredProperty.querySelector('#nopre').innerHTML = property.nopre;
  

  currentPropertyIndex = (currentPropertyIndex + 1) % properties.length;

  setTimeout(changeFeaturedProperty, 5000); 
}
changeFeaturedProperty();

//



