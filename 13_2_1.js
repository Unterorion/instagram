document.addEventListener("DOMContentLoaded",
    function(e){
        let button = document.querySelector("input")
        button.addEventListener("click",
            function(e){
                console.log(e.target.getAttribute("value"))
            }
        )
    }
)