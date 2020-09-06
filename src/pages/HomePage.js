import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi beatae, accusantium sunt, consectetur tenetur harum labore molestias voluptate natus saepe eum delectus quasi. Numquam non officia quidem nisi et error."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiegeo?",
        author: "Anna Nowak",
        text: "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi beatae, accusantium sunt, consectetur tenetur harum labore molestias voluptate natus saepe eum delectus quasi. Numquam non officia quidem nisi et error."
    },
    {
        id: 3,
        title: "3 Ciemna materia i ciemna energia",
        author: "Pan Nowak",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi beatae, accusantium sunt, consectetur tenetur harum labore molestias voluptate natus saepe eum delectus quasi. Numquam non officia quidem nisi et error."
    }
]

const artList = articles.map(article => (
    <Article key={article.id} {...article} />
))

const HomePage = () => {
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;