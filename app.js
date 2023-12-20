fetchQuote=()=>{
    fetch('https://type.fit/api/quotes').then((data)=>{
        console.log('data fetched from url')
        return data.json()
    })
    .then((data)=>{
        let random =Math.floor(Math.random()*data.length);
        document.getElementById('quote').innerText=data[random].text;
        document.getElementById('author').innerText=data[random].author;
    })
}
fetchQuote()