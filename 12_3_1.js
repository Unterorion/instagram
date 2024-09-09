document.addEventListener("DOMContentLoaded", //문서에서 찾고자 하는 대상이 로드 될때까지 대기
    function (e) { //로드 되면
        let button = document.querySelector("input") //input태그 찾아서(위에서 대기한거) 변수 지정
        button.addEventListener("input", //변수에 input이라는 이벤트 발생 하면
            function (e) { //아래 함수 실행하기
                console.log(e.target.value) //이벤트(e)의 타겟(input창)의 value(입력한 값) 출력
            }
        )
    }
)

function hi() {
    alert("hi")
}