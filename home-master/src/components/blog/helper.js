
const fetchData async = () => {
    await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shashankmv")
    .then(res => res.json())
    .then(data => {
        const res = data.items
        setResponse(res)
        res.map((item) => {
            setPosts([...item])
        })
        console.log(posts)
        //setPosts(res.filter(item => item.categories.length >0))
        res.filter(item => item.categories.length >0)
        function toText(node) {
            let tag = document.createElement('div')
            tag.innerHTML = node
            node = tag.innerText
            return node
         }
         function shortenText(text,startingPoint ,maxLength) {
            return text.length > maxLength?
               text.slice(startingPoint, maxLength):
               text
           }
           console.log(response.data)
    })
    .catch(err => console.log(err))
}
