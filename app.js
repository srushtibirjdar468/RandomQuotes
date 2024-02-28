fetchQuote=()=>{
    const container = document.getElementById('container');
    fetch('https://type.fit/api/quotes').then((data)=>{
        console.log('data fetched from url')
        return data.json()
    })
    .then((data)=>{
        let counter = 1;
        data.forEach(d => {
            const mydiv = document.createElement('div');
            mydiv.className = 'quote'
            mydiv.id = 'div' + counter;

            const heading = document.createElement('h2');
            heading.innerHTML = d.text
            mydiv.appendChild(heading);

            const description = document.createElement('p');
            description.innerHTML = d.author;
            mydiv.appendChild(description);

            container.appendChild(mydiv);
            counter++;
        });
        
    })

    
}
fetchQuote()