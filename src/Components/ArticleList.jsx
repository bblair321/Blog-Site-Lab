import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <div className="article-list">
            <h2>Articles</h2>
        <main>
            {posts.map(post => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
        </div>
    );
}

export default ArticleList;
