import { Article } from './article';
export const ARTICLES: Article []  = [
    {
        id: 1,
        title: 'My First Article',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        decription: 'This is my first article, It is great to read thet',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'My Second Article',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        decription: 'This is my Second article, It is great to read thet',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    }
];
