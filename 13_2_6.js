document.addEventListener("DOMContentLoaded",
    function(e){
        let text = document.querySelector("p")
        let button = document.querySelector("input")

        button.addEventListener("click",
            function(e){
                let lang = text.textContent
                if (lang === "HTML"){
                    text.textContent = "JS"
                } else if (lang === "JS"){
                    text.textContent = "python"
                } else if (lang === "python"){
                    text.textContent = "HTML"
                }
            }
        )
    }
)