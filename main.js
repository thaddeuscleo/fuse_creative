class Offer{
    constructor(){
        //Inputs
        this.fullnameInput = document.getElementById('fullname')
        this.emailInput = document.getElementById('email')
        this.usernameInput = document.getElementById('username')
        this.addressInput = document.getElementById('address')
        this.maleButton = document.getElementById('male-button')
        this.femaleButton = document.getElementById('female-button')
        this.regionInput = document.getElementById('region')
        this.musicCategoryInput = document.getElementById('music-category')
        this.fileInput = document.getElementById('file')
        this.submitButton = document.getElementById('submit')

        //Warning Containers
        this.fullnameMessage = document.getElementById('fullname-message')
        this.emailMessage = document.getElementById('email-message')
        this.usernameMessage = document.getElementById('username-message')
        this.addressMessage = document.getElementById('address-message')
        this.genderMessage = document.getElementById('gender-message')
        this.regionMessage = document.getElementById('region-message')
        this.musicCategoryMessage = document.getElementById('music-category-message')
        this.fileMessage = document.getElementById('file-message')
        
        //Init State
        this.init()
        this.validate()
    }

    init() {
        this.fullnameMessage.style.display = "none"
        this.emailMessage.style.display = "none"
        this.usernameMessage.style.display = "none"
        this.addressMessage.style.display = "none"
        this.genderMessage.style.display = "none"
        this.regionMessage.style.display = "none"
        this.musicCategoryMessage.style.display = "none"
        this.fileMessage.style.display = "none"
    }

    validate() {
        
        this.submitButton.addEventListener("click", () => {
            
            this.validateFullname()

            this.validateEmail()

            this.validateUsername()

            this.validateAddress()

            this.validateGender()

            this.validateRegion()

            this.validateMusicCategoty()

            this.validateFile()
        })
    }

    validateFullname() {
        let warning = "⚠ "
        if(!this.textInputLenght(this.fullnameInput)){
            //not filled
            event.preventDefault()
            this.fullnameMessage.innerHTML = warning + "Fullname is required"
            this.fullnameMessage.style.display = "block";
            return
        }

        if (!this.textInput5to20(this.fullnameInput)) {
            //les than 5 more than 20
            event.preventDefault()
            this.fullnameMessage.innerHTML = warning + "Fullname must be 5 - 20 character long"
            this.fullnameMessage.style.display = "block";
            console.log('masuk2')
            return
        }

        if (!this.aplhabetOnly(this.fullnameInput)) {
            //not alphabet
            event.preventDefault()
            this.fullnameMessage.innerHTML = warning + "Fullname must be alphabet only"
            this.fullnameMessage.style.display = "block";
            return
        }

        this.fullnameMessage.style.display = "none";
    }

    validateEmail() {
        let warning = "⚠ "
        if (!this.textInputLenght(this.emailInput)) {
            //not filled
            event.preventDefault()
            this.emailMessage.innerHTML = warning + "Email is required"
            this.emailMessage.style.display = "block"
            return
        }

        if (!this.containAt(this.emailInput)) {
            //not contain @
            event.preventDefault()
            this.emailMessage.innerHTML = warning + "Email must contain @"
            this.emailMessage.style.display = "block"
            return
        }

        if (!this.endsWithDotCom(this.emailInput)) {
            event.preventDefault()
            this.emailMessage.innerHTML = warning + "Email must ends with .com"
            this.emailMessage.style.display = "block"
            return
        }

        this.emailMessage.style.display = "none"
    }

    validateUsername() {
        let warning = "⚠ "
        if (!this.textInputLenght(this.usernameInput)) {
            //not filled
            this.usernameMessage.innerHTML = warning + "Username is required"
            this.usernameMessage.style.display = "block"
            return
        }

        if (!this.startsWithAt(this.usernameInput)) {
            event.preventDefault()
            this.usernameMessage.innerHTML = warning + "Username must start with @"
            this.usernameMessage.style.display = "block" 
            return
        }

        this.usernameMessage.style.display = "none"
    }

    validateAddress() {
        let warning = "⚠ "
        if (!this.textInputLenght(this.addressInput)) {
            //not filled
            this.addressMessage.innerHTML = warning + "Address is required"
            this.addressMessage.style.display = "block"
            return
        }

        if (!this.isAlphaNum(this.addressInput)) {
            this.addressMessage.innerHTML = warning + "Address must be alpha numeric"
            this.addressMessage.style.display = "block"
            return
        }

        if (!this.isValidCount(this.addressInput)) {
            this.addressMessage.innerHTML = warning + "Address must be at laest 4 word"
            this.addressMessage.style.display = "block"
            return
        }

        if (!this.isContainSteet(this.addressInput)) {
            this.addressMessage.innerHTML = warning + "Address must contain street"
            this.addressMessage.style.display = "block"
            return
        }

        this.addressMessage.style.display = "none"
    }

    validateGender() {
        let warning = "⚠ "
        if (!this.maleButton.checked && !this.femaleButton.checked) {
            this.genderMessage.innerHTML = warning + "Gender is required"
            this.genderMessage.style.display = "block"
            return 
        }
        this.genderMessage.style.display = "none"
        return
    }

    validateRegion() {
        //default : Region
        let warning = "⚠ "
        if (this.regionInput.value == "Region") {
            this.regionMessage.innerHTML = warning + "Region is required"
            this.regionMessage.style.display = "block"
            return 
        }
        this.regionMessage.style.display = "none"
        return
    }

    validateMusicCategoty() {
        //default : Category
        let warning = "⚠ "
        if (this.musicCategoryInput.value == "Category") {
            this.musicCategoryMessage.innerHTML = warning + "Music category is required"
            this.musicCategoryMessage.style.display = "block"
            return 
        }
        this.musicCategoryMessage.style.display = "none"
        return
    }

    validateFile() {
        let warning = "⚠ "
        if (this.fileInput.files.length == 0) {
            this.fileMessage.innerHTML = warning + "File is required"
            this.fileMessage.style.display = "block"
            return 
        }
        this.fileMessage.style.display = "none"
        return
    }


    textInputLenght(param) {
        let str = param.value.length
        if(str == null || str == 0){
            return false
        }
        return true
    }

    textInput5to20(param) {
        let str = param.value.length
        if(str >= 5 && str <= 20){
            return true
        }
        return false
    }

    aplhabetOnly(param) {
        let str = param.value
        for (let i = 0; i < str.length - 1; i++) {
            if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) || (str.charCodeAt(i) == 32)){
                continue
            }else {
                return false
            }
        }
        return true
    }

    containAt(param) {
        let str = param.value
        if(str.includes('@')){
            return true
        }
        return false
    }

    endsWithDotCom(param) {
        let str = param.value
        if (str.endsWith('.com')) {
            return true
        }
        return false
    }

    startsWithAt(param) {
        let str = param.value
        if (str.startsWith('@')) {
            return true
        }
        return false
    }

    isAlphaNum(param) {
        let str = param.value

        for (let i = 0; i < str.length; i++) {
            if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) || (str.charCodeAt(i) == 32) || (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) || (str.charCodeAt(i) == 46)) {
                continue
            }else {
                return false
            }
        }
        return true
    }

    isContainSteet(param) {
        let str = param.value
        if(str.includes('street') || str.includes('Street')){
            return true
        }
        return false
    }

    isValidCount(param) {
        let str = param.value.split(' ').length
        if (str >= 4) {
            return true
        }
        return false
    }



}

let offer = new Offer();






