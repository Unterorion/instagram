document.addEventListener("DOMContentLoaded",
    function (e) {
        let configID = document.querySelector("#id")
        let idText = document.querySelector("#profile_info h2")

        let profilePic = document.querySelector("#profile img")

        let editProfile = document.querySelector("#editProfile")
        let name = document.querySelector("#name")
        let profileText = document.querySelector("#profileText")
        let introLink = document.querySelector("#introLink")
        let changing = false

        configID.addEventListener("click",
            function (e) {
                idText.textContent = prompt("새로운 아이디를 입력하세요.")
            }
        )

        profilePic.addEventListener("mouseover",
            function (e) {
                e.target.style.filter = "grayscale(50%)"
            }
        )

        profilePic.addEventListener("mouseleave",
            function (e) {
                e.target.style.filter = "grayscale(0%)"
            }
        )

        profilePic.addEventListener("click",
            function (e) {
                profilePic.setAttribute("src", prompt("새로운 이미지의 URL을 입력하세요."))
            }
        )

        editProfile.addEventListener("click",
            function (e) {
                if (changing === false) {
                    let _name = name.textContent
                    let _profileText = profileText.textContent
                    let _introLink = introLink.textContent

                    name.innerHTML = "<input value=" + _name + "></input>"
                    profileText.innerHTML = "<input value=" + _profileText + "></input>"
                    introLink.innerHTML = "<input value=" + _introLink + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                } else{
                    let _name = name.querySelector("input").value
                    let _profileText = profileText.querySelector("input").value
                    let _introLink = introLink.querySelector("input").value

                    name.innerHTML = _name
                    profileText.innerHTML = _profileText

                    if (_introLink.startsWith("http")){
                        _introLink = "<a href=" + _introLink + ">" + _introLink + "</a>"
                    }
                    introLink.innerHTML = _introLink

                    e.target.textContent = "프로필 편집"
                    changing = false
                }
            }
        )
    }
)
