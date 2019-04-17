import React from 'react';
import Article from '../components/Article'


const articles = [
    {

        id: 1,
        title: 'Big-Bang Theory',
        author: 'Private',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam accusamus impedit neque! Unde adipisci modi ex, totam magni nostrum hic amet ipsum rerum, nam ducimus rem eos praesentium ipsam, odio sapiente enim! Commodi reiciendis ratione inventore expedita tempore sint voluptates quam, deserunt amet quos, corrupti ipsam autem sapiente beatae.',
    }
    ,
    {

        id: 2,
        title: 'Matrix Theory',
        author: 'Private',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam accusamus impedit neque! Unde adipisci modi ex, totam magni nostrum hic amet ipsum rerum, nam ducimus rem eos praesentium ipsam, odio sapiente enim! Commodi reiciendis ratione inventore expedita tempore sint voluptates quam, deserunt amet quos, corrupti ipsam autem sapiente beatae.',
    }
    ,
    {

        id: 3,
        title: 'Andromeda Theory',
        author: 'Private',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam accusamus impedit neque! Unde adipisci modi ex, totam magni nostrum hic amet ipsum rerum, nam ducimus rem eos praesentium ipsam, odio sapiente enim! Commodi reiciendis ratione inventore expedita tempore sint voluptates quam, deserunt amet quos, corrupti ipsam autem sapiente beatae.',
    }
]

const HomePage = () => {

    const artList = articles.map(article => (<Article key={article.id} {...article} />))
    return (


        <div className="home">
            {artList}
        </div>

    );
}

export default HomePage;