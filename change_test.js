document.addEventListener("DOMContentLoaded",
    function(e){
        let object = document.querySelector("#data")
        object.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        )
    }
)