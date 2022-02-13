const NewsItem = (props) => {
    return <div>{props.news.slug}</div>;
};

export const getStaticProps = (context) => {
    return ({
        props: {
            news: {
                slug: context.params.id
            }
        }
    })
}

export const getStaticPaths = () => {

    return ({
        paths: [
            {
                params: {
                    id: "first-news"
                },
                locale: "en"
            },
            {
                params: {
                    id: "prva-novost"
                },
                locale: "latn"
            }
        ],
        fallback: false
    });
}

export default NewsItem;
