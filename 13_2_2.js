document.addEventListener("DOMContentLoaded",
    function (e) {
        let input = document.querySelector("input")
        input.addEventListener("click",
            function (e) {
                console.log(e)
                if (e.target.getAttribute("type") === "button") {
                    e.target.setAttribute("type", "text")
                }
            }
        )

        input.addEventListener("change",
            function (e) {
                console.log(e)
                e.target.setAttribute("type", "button") //button으로 바꿨을때 입력 텍스트가 value로 남아있다. 그럼 type이 text일때도 value가 존재하는건가?
            }
        )
    }
)