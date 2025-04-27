$(window).on('load resize', function() {
  setWidthHeight()
  typeText("우리가 이 외부의 영향력으로부터 해방될 수 없다면, 개인이 ‘더 나은’ 상태를 위해 노력한다는 것은 무슨 의미인가? 신작에서 작가는 소원을 빌며 혹은 소원 성취에 감사하며 바치는 사물, 곧 봉헌물에 주목한다. 서로를 위하는 친구들의 목소리가 새겨진 물질로 떠 낸 작가의 두상, 행복에 대한 바람을 담아 빚은 신체 조각은 일종의 봉헌물이다. 전작들에서 끝내 파괴되곤 하던 물질은 이제 외부의 작용을 수용하고 스스로 변화하는 능동적인 힘, 즉 ‘가소성’을 가진 것으로 탈바꿈한다. 형태와 물질에 무관하게 친구들의 마음이 전해지고 간절한 기원을 담은 사물이 마음을 위안하듯 말이다. 작품은 나를 강제하는 힘에 대한 진술로부터 나를 지탱하는 힘에 대한 증언으로 이행한다. 고립의 시간을 지나온 조각에 다정한 진심이 녹아든다.");
  pageStatus(3)
});


/*SET VH,VW*/
function setWidthHeight(){
  const vw = window.innerWidth * 0.01;
	const vh = window.innerHeight * 0.01;
  $(':root').css('--vh', (`${vh}px`));
  $(':root').css('--vw', (`${vw}px`));
};


/*
$('#mapPageIcon').click(function(){
  pageStatus(2)
})
*/


function pageStatus(mode){
  if(mode == 0){
    $('#mapPage, #descriptionPage').css({'width':`0`,'height':`0`,'border':`none`,'content-visibility':'none'})
  }
  else if(mode == 1){
    $('#mapPage, #descriptionPage').css({'border':`none`})
    $('#mapPage').css({'width':`${100*vw}`,'height':`${100*vh},'content-visibility':'visible'`})
    $('#descriptionPage').css({'width':`0`,'height':`0`,'content-visibility':'none'})
  }
  else if(mode == 2){
    $('#mapPage, #descriptionPage').css({'border':`none`})
    $('#mapPage').css({'width':`0`,'height':`0`,'content-visibility':'none'})
    $('#descriptionPage').css({'width':`${100*vw}`,'height':`${100*vh},'content-visibility':'visible'`})
  }
  else if(mode == 3){
    $('#mapPage, #descriptionPage').css({'width':`100vw`,'height':`50vh`,'content-visibility':'visible'})
    $('#mapPage').css({'border-bottom':`solid 2px black`})
  }
}





function typeText(text) {
  const container = document.getElementById("description");
  container.innerHTML = ''; // 초기화

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.classList.add("fade-in");

    // 공백 문자일 경우 &nbsp;로 처리
    span.innerHTML = (char === ' ') ? '&nbsp;' : char;

    container.appendChild(span);

    setTimeout(() => {
      span.classList.add("show");
    }, i * 15);
  });
}