import { useEffect, useState } from "react";

export const NewsResult = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const { keyword, sortBy } = props;
                let url = "https://newsapi.org/v2/";
                if (keyword.trim() === "") {
                    url += "top-headlines?country=in&pageSize=100&apiKey=b28a45b4236b4666bab6a51695ff1d3b"
                } else {
                    url += "everything?q=" + keyword + "&sortBy="+sortBy+"&pageSize=100&apiKey=b28a45b4236b4666bab6a51695ff1d3b";
                }
                const response = await fetch(url);
                const itemsReceived = await response.json();
                const newArray = itemsReceived.articles;
                setItems(newArray)
            } catch (e) {
                console.log(e)
            }
            finally {
                setIsLoading(false);
            }
        })();
    }, [props]);
    return (
        <>
            {isLoading ? (
                <h3 className="text-center mt-3">Loading...</h3>
            ) : (
                <div className="container text-center mt-3 p-3">
                    {items.map((item, index) =>
                        <div key={index} className="w-100 my-1 m-1 overflow-hidden border border-2 rounded-3 d-inline-block" style={{ maxWidth: "300px", width: "97%", height: "140px" }}>
                            <div className="text-truncate">
                                <span className="text-primary"><b>{item.title}</b></span><br />
                            </div>
                            <img className="w-100 stretchy" src={item.urlToImage} style={{ height: "113px" }} />
                        </div>)}
                </div>
            )}
        </>
    );
};