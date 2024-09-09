document.addEventListener("DOMContentLoaded",
    function(e){
        let id_keydown = document.querySelector("#keydown")
        id_keydown.addEventListener("keydown",
            function(e){
                console.log(e.key)
                if(e.key==='q'){
                    alert("This is Q!")
                }
            }
        )

        let id_change = document.querySelector("#change")
        id_change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        )

        let id_input = document.querySelector("#input")
        id_input.addEventListener("input",
            function(e){
                console.log(e.target.value)
            }
        )
    }
)