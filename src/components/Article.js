import React from 'react';

const styles = {
    marginTop: 40
}

const Article = ({ title, author, text }) => {
    return (
        <article style={styles}>
            <h3 style={{ marginBottom: 5, textTransform: "uppercase" }}>{title}</h3>
            <span>{author}</span>
            <p>{text}</p>
        </article>
    );
}

export default Article;