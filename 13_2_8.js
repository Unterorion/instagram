document.addEventListener("DOMContentLoaded",
    function(e){
        let editName = document.querySelector("#editName")
        let inputNewName = document.querySelector("#inputNewName")
        let currentName = document.querySelector("#currentName")
        let editButton = document.querySelector("#editButton")
        let newNameInput = document.querySelector("#newNameInput")

        editName.addEventListener("click",
            function(e){
                editName.style.display = "none"
                inputNewName.style.display = "block"
            }
        )

        editButton.addEventListener("click",
            function(e){
                currentName.textContent = newNameInput.value
                inputNewName.style.display = "none"
                editName.style.display = "inline"
            }
        )
    }
)