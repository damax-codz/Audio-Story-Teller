document.getElementById('stpry').innerHTML.trim()

alert("welcome to story town");*

function speak(){
    let butt=document.getElementsByTagName('i')[2].className
    if(butt=="fas fa-play"){
    document.getElementsByTagName('i')[2].className='fas fa-pause'
    let story = document.getElementById('story')
    responsiveVoice.speak(story.innerHTML, "US English Female", {rate: 0.9
    })
   
    document.querySelector('.one').style.animationPlayState='running'
    document.querySelector('.two').style.animationPlayState='running'
    document.querySelector('.three').style.animationPlayState='running'
    document.querySelector('.reactor').style.visibility='visible'
    }
    else{
    responsiveVoice.cancel()
    document.getElementsByTagName('i')[2].className='fas fa-play'
    document.querySelectorAll('.one')[0].style.animationPlayState='paused'
    document.querySelectorAll('.two')[0].style.animationPlayState='paused'
    document.querySelectorAll('.three')[0].style.animationPlayState='paused'
    document.querySelectorAll('.reactor')[0].style.visibility='hidden'
    }
}
function speakTwo(){
    let butt=document.getElementsByTagName('i')[3].className
    if(butt=="fas fa-play"){
    document.getElementsByTagName('i')[3].className='fas fa-pause'
    let story = document.getElementById('story-two')
    responsiveVoice.speak(story.innerHTML, "US English Female", {rate: 0.9})
   
    document.querySelectorAll('.one')[1].style.animationPlayState='running'
    document.querySelectorAll('.two')[1].style.animationPlayState='running'
    document.querySelectorAll('.three')[1].style.animationPlayState='running'
    document.querySelectorAll('.reactor')[1].style.visibility='visible'
    }
    else{
        responsiveVoice.cancel()
        document.getElementsByTagName('i')[3].className='fas fa-play'
        document.querySelectorAll('.one')[1].style.animationPlayState='paused'
        document.querySelectorAll('.two')[1].style.animationPlayState='paused'
        document.querySelectorAll('.three')[1].style.animationPlayState='paused'
        document.querySelectorAll('.reactor')[1].style.visibility='hidden'
    }
}
function speakThree(){
    let butt=document.getElementsByTagName('i')[4].className
    if(butt=="fas fa-play"){
    document.getElementsByTagName('i')[4].className='fas fa-pause'
    let story = document.getElementById('story-three')
    responsiveVoice.speak(story.innerHTML, "US English Female", {rate: 0.9})

    document.querySelectorAll('.one')[2].style.animationPlayState='running'
    document.querySelectorAll('.two')[2].style.animationPlayState='running'
    document.querySelectorAll('.three')[2].style.animationPlayState='running'
    document.querySelectorAll('.reactor')[2].style.visibility='visible'
    }
    else{
        responsiveVoice.cancel()
        document.getElementsByTagName('i')[4].className='fas fa-play'
        document.querySelectorAll('.one')[2].style.animationPlayState='paused'
        document.querySelectorAll('.two')[2].style.animationPlayState='paused'
        document.querySelectorAll('.three')[2].style.animationPlayState='paused'
        document.querySelectorAll('.reactor')[2].style.visibility='hidden'
    }
}
function speakFour(){
    let butt=document.getElementsByTagName('i')[5].className
    if(butt=="fas fa-play"){
    document.getElementsByTagName('i')[5].className='fas fa-pause'
    let story = document.getElementById('story-four')
    responsiveVoice.speak(story.innerHTML, "US English Female", {rate: 0.9})
   
    document.querySelectorAll('.one')[3].style.animationPlayState='running'
    document.querySelectorAll('.two')[3].style.animationPlayState='running'
    document.querySelectorAll('.three')[3].style.animationPlayState='running'
    document.querySelectorAll('.reactor')[3].style.visibility='visible'
    }
    else{
        responsiveVoice.cancel()
        document.getElementsByTagName('i')[5].className='fas fa-play'
        document.querySelectorAll('.one')[3].style.animationPlayState='paused'
        document.querySelectorAll('.two')[3].style.animationPlayState='paused'
        document.querySelectorAll('.three')[3].style.animationPlayState='paused'
        document.querySelectorAll('.reactor')[3].style.visibility='hidden'
    }
}
function speakFive(){
    
    let butt=document.getElementsByTagName('i')[6].className
    if(butt=="fas fa-play"){
    document.getElementsByTagName('i')[6].className='fas fa-pause'
    let story = document.getElementById('story-five')
    responsiveVoice.speak(story.innerHTML, "US English Female", {rate: 0.9})
   
    document.querySelectorAll('.one')[4].style.animationPlayState='running'
    document.querySelectorAll('.two')[4].style.animationPlayState='running'
    document.querySelectorAll('.three')[4].style.animationPlayState='running'
    document.querySelectorAll('.reactor')[4].style.visibility='visible'
    }
    else{
        responsiveVoice.cancel()
        document.getElementsByTagName('i')[6].className='fas fa-play'
        document.querySelectorAll('.one')[4].style.animationPlayState='paused'
        document.querySelectorAll('.two')[4].style.animationPlayState='paused'
        document.querySelectorAll('.three')[4].style.animationPlayState='paused'
        document.querySelectorAll('.reactor')[4].style.visibility='hidden'
    }
}
function speakSix(){
    let butt=document.getElementsByTagName('i')[7].className
    if(butt=="fas fa-play"){
    document.getElementsByTagName('i')[7].className='fas fa-pause'
    let story = document.getElementById('story-six')
    responsiveVoice.speak(story.innerHTML, "US English Female", {rate: 0.9})
   
    document.querySelectorAll('.one')[5].style.animationPlayState='running'
    document.querySelectorAll('.two')[5].style.animationPlayState='running'
    document.querySelectorAll('.three')[5].style.animationPlayState='running'
    document.querySelectorAll('.reactor')[5].style.visibility='visible'
    }
    else{
        responsiveVoice.cancel()
        document.getElementsByTagName('i')[7].className='fas fa-play'
        document.querySelectorAll('.one')[5].style.animationPlayState='paused'
        document.querySelectorAll('.two')[5].style.animationPlayState='paused'
        document.querySelectorAll('.three')[5].style.animationPlayState='paused'
        document.querySelectorAll('.reactor')[5].style.visibility='hidden'
    }
}
