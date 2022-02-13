const NewsItem = (props) => {
    console.log(props);
    return <div>NewsItem</div>;
};

export const getStaticProps = (context) => {
    const id = context.params.id;

    if (id == 0)
        return ({
            redirect: {
                destination: "/news/1"
            }
        });

    return ({
        props: {
            news: {
                id: 1
            }
        }
    })
}

export const getStaticPaths = () => {

    return ({
        paths: [
            {
                params: {
                    id: "0"
                }
            },
            {
                params: {
                    id: "1"
                }
            }
        ],
        fallback: false
    });
}

export default NewsItem;
