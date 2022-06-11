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

const endGame = () => {
    if(window.confirm("감사합니다. 무사히 우주에 도착하였습니다. 우주에서 찍은 작은 선물을 하나 준비했습니다. 다운을 원하시면 확인 버튼을 눌러주세요. Thank you. I arrived cosmos. This is my gift for you. If you want to download, click confirm button.")){    
        window.alert('이미지를 한번 더 클릭하면 게임이 리셋됩니다. If you want to restart click the image')
        const $format = get('.count')
        $format.innerHTML = `
        <div>
            <a class = 'Gift' href="./img/specialGift.png" download><button class="down_btn"> Download </button></a>
        </div>
        `
        const $lastImg = get("img")
        $lastImg.onclick = ()=>{
            window.location.reload()
        }

    }else{
        window.location.reload()
    }
}

const toggle = (e) =>{
    let $count = get('.count') 
    if (e.classList[0] === 'default'){
        if (Number($count.innerHTML >= 1000000)){
            e.src = './img/specialGift.png'
            endGame(e);
        }else if (Number($count.innerHTML) >= 100000){
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
    <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DCGETV7529"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DCGETV7529');
    </script>
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


