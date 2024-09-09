document.addEventListener("DOMContentLoaded",
    function(e){
        let input = document.querySelector("input")
        let img = document.querySelector("img")

        let imgi = "image/profile.jpg"
        let img1 = "image/thumb1.jpg"
        let img2 = "image/thumb2.jpg"
        let img3 = "image/thumb3.jpg"
        let img4 = "image/thumb4.jpg"
        input.addEventListener("click",
            function(e){
                let src = img.getAttribute("src")
                if (src === imgi){
                    img.setAttribute("src", img1)
                } else if (src === img1){
                    img.setAttribute("src", img2)
                } else if (src === img2){
                    img.setAttribute("src", img3)
                } else if (src === img3){
                    img.setAttribute("src", img4)
                } else if (src === img4){
                    img.setAttribute("src", imgi)
                }
            }
        )
    }
)