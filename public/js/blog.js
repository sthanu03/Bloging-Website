let blogId = decodeURI(location.pathname.split("/").pop());

let docRef = db.collection("blogs").doc(blogId);

docRef.get().then((doc) => {
    if(doc.exists){
        setupBlog(doc.data());
    } else {
        location.replace("/");
    }
})

const setupBlog = (data) => {
    const banner = document.querySelector('.banner');
    const blogTitle = document.querySelector('.title');
    const titleTag = document.querySelector('.title');
    const publish = document.querySelector('.published');

    banner.style.backgroundImage = 'url(${data.bannerImage})';

    titleTag.innerHTML = blogTitle.innerHTML = data.title;
    publish.innerHTML = data.publishedAt;

    const article = document.querySelector('.article');
    addArticle(article, data.article);
}

const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);
    //console.log(data);

    data.forEach(item => {
        //check for heading
        if(item[0] == '#'){
            let hCount = 0;
            let i = 0;
            while(item[i] == '#'){
                hCount++;
                i++;
            }
            let tag = 'h${hCount}';
            ele.innerHTML += '<${tag}>${item.slice(hCount, item.length)}</${tag}>'
        } 
        else if(item[0] == "!" && item[1] == "{"){
            let separator;

            for(let i = 0; i <= item.length; i++){
                if(item[i] == "{" && item[i + 1] == "(" && item[item.length - 1] == ")"){
                    separator = i;
                }
            }

            let alt = item.slica(2, separator);
            let src = item.slica(separator + 2, item.length - 1);
            ele.innerHTML += `
            <img src = "${src}" alt=${slt} class="article-image">
            `;
        }

        else {
            ele.innerHTML += '<p>${item}</p>';
        }
    })
}