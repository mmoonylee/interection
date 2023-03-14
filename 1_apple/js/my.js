(() => {
    let yOffset = 0; //window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0;
    let currentScene = 0;

    const sceneInfo = [
        // 각 객체는 섹션을 나타낸다
        {
            //0
            type:"sticky",
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
				messageB: document.querySelector('#scroll-section-0 .main-message.b'),
				messageC: document.querySelector('#scroll-section-0 .main-message.c'),
				messageD: document.querySelector('#scroll-section-0 .main-message.d'),
            },
            values:{

            }
        },
        {
            //1
            type:"normal",
            heightNum: 5, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector("#scroll-section-1")
            }
        },
        {
            //2
            type:"sticky",
            heightNum: 5, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector("#scroll-section-2")
            }
        },
        {
            //3
            type:"sticky",
            heightNum: 5, 
            scrollHeight : 0,
            objs:{
                container: document.querySelector("#scroll-section-3")
            }
        }
    ];

    function setLayout(){
        //각 스크롤 섹션의 높이 세팅
        for (let i = 0; i<sceneInfo.length;i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
		for (let i = 0; i < sceneInfo.length; i++) {
			totalScrollHeight += sceneInfo[i].scrollHeight;
			if (totalScrollHeight >= yOffset) {
				currentScene = i;
				break;
			}
		}
    }

    function scrollLoop(){
        prevScrollHeight = 0; 
        for (let i = 0; i < currentScene; i++) {
			prevScrollHeight += sceneInfo[i].scrollHeight;
		}
        
        //스크롤 내릴때 
        if ( yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }

        // 스크롤 올릴때
        if ( yOffset < prevScrollHeight){
            if( currentScene === 0) return; //바운스 동작의 오류 방지
            currentScene--;
        }

        document.body.setAttribute('id', `show-scene-${currentScene}`);
        console.log(currentScene)
    }

    function playAnimation(){
        

    }
    
    setLayout();

    window.addEventListener("load", setLayout);
    window.addEventListener("resize", setLayout);
    window.addEventListener("scroll", () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

})();