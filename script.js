const progress = document.querySelectorAll('.progress')
console.log(progress)
const articles = document.querySelectorAll('article');
console.log(articles)

window.addEventListener('scroll' , getDetails);

function getDetails(){
  // console.clear();
  articles.forEach(article=>{
    // console.log(article.getBoundingClientRect())
    if(article.getBoundingClientRect().top < window.innerHeight-50){
      article.classList.add('scroll-effect');
    }
    else{
      article.classList.remove('scroll-effect');
    }
  })

  progress.forEach(pro=>{
    if(pro.getBoundingClientRect().top < window.innerHeight - 50){
      pro.classList.add('show-effect');
    }
    else{
      pro.classList.remove('show-effect');
    }

  })
}

getDetails();