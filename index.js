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
    if (e.classList[0] === 'default'){
        e.classList.remove('default')
        e.classList.add('change')
        e.src = './img/change.png'
        audioPlay();
    }else{
        e.classList.add('default')
        e.classList.remove('change')
        e.src = './img/person.png'
        audioPlay();
    }
}

const audioPlay = () => { 
    var audio = document.getElementById('audio_play');
    audio.currentTime = 0
    audio.play();
} 


let count = 0

const createNewPage = () =>{
    $contents.innerHTML = `
    <div class="main">
    <h2>COSMOSHIPPIE to COSMOS</h2>
    <p class = "count">0</p>
    <img class = "default" src="./img/person.png">
    </div>
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
