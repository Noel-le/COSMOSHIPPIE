const get = (target) => {
    return document.querySelector(target);
  };

const $contents = get('.contents')
const $btn = get('.btn')
const $main = get('.main')

const addCount = (e) =>{
    var result = Number(e)+1
    return result
}

const toggle = (e) =>{
    let $count = get('.count') 
    if (e.classList[0] === 'default'){
        if (Number($count.innerHTML) >= 100000){
            e.src = './img/100000.png'
        }else if(Number($count.innerHTML) >= 50000){
            e.src = './img/50000.png'
        } else if (Number($count.innerHTML) >= 10000){
            e.src = './img/10000.png'
        } else {
            e.classList.remove('default')
            e.classList.add('change')
            e.src = './img/change.png'    
        }
    }else{
        e.classList.add('default')
        e.classList.remove('change')
        e.src = './img/person.png'
    }
}

let count = 0
const createNewPage = () =>{
    $contents.innerHTML = `
    <div class="main">
    <h2>COSMOSHIPPIE to COSMOS</h2>
    <p class = "count">0</p>
    <img class = "default" src="./img/person.png">
    </div>
    <footer>
        <a href="https://www.youtube.com/channel/UCpFDSAscLYsC25tTp7q-CQg"><img class = "youtube" src="./img/youtube.png"> Youtube</a>
        <a href="https://www.instagram.com/cosmoshippie/?hl=ko"><img class = "instagram" src="./img/insta.png"> Instagram</a>
    </footer>

    `
    const $img = get('.default')
    const $cnt = get('.count')


    $img.onclick = () => {
        $cnt.innerHTML = addCount($cnt.innerHTML)
        count+=1
        toggle($img)
    }
    return $contents
}

$btn.onclick = function(){
    createNewPage()
}

