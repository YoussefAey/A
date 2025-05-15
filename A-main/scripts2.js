function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeLanguage(lang) {
    // Save the selected language in localStorage
    localStorage.setItem("selectedLanguage", lang);
    // Handle texture visibility
    const textureEnglish = document.getElementById("texture-english");
    const textureArabic = document.getElementById("texture-arabic");
    const textureFrench = document.getElementById("texture-french");
    const textureAmazigh = document.getElementById("texture-amazigh");
    const textureJapanese = document.getElementById("texture-japanese");

    const homeLink = document.getElementById("home-link");
    const languageLink = document.getElementById("language-link");
    const loginLink = document.getElementById("login-link");

    const logoe = document.getElementById("logoe");


        // Login and Register Forms
    const loginTitle = document.querySelector(".form-box.login h2");
    const emailLabel = document.querySelector(".form-box.login .input-box:nth-child(1) label");
    const passwordLabel = document.querySelector(".form-box.login .input-box:nth-child(2) label");
    const rememberMeLabel = document.querySelector(".form-box.login .remember-forgot label");
    const forgotPassword = document.querySelector(".form-box.login .remember-forgot a");
    const loginButton = document.querySelector(".form-box.login .btn");

    const registerTitle = document.querySelector(".form-box.register h2");
    const usernameLabel = document.querySelector(".form-box.register .input-box:nth-child(1) label");
    const registerEmailLabel = document.querySelector(".form-box.register .input-box:nth-child(2) label");
    const registerPasswordLabel = document.querySelector(".form-box.register .input-box:nth-child(3) label");
    const agreeTermsLabel = document.querySelector(".form-box.register .remember-forgot label");
    const registerButton = document.querySelector(".form-box.register .btn");
    const loginRegisterText = document.querySelector(".login-register p");




    // Remove all language-specific classes from the logo
    logoe.classList.remove("eng","ara" ,"jpns");

    if (lang === 'en') {
        textureEnglish.classList.remove("hidden");
        textureArabic.classList.add("hidden");
        textureFrench.classList.add("hidden");
        textureAmazigh.classList.add("hidden");
        textureJapanese.classList.add("hidden");

        homeLink.textContent = "Home";
        languageLink.textContent = "Language";
        loginLink.textContent = "Login";

        logoe.textContent = "B. Youssef";
        logoe.classList.add("eng");

                // Login Form Translations
        loginTitle.textContent = "Login";
        emailLabel.textContent = "Email";
        passwordLabel.textContent = "Password";

        forgotPassword.textContent = "Forgot Password?";
        loginButton.textContent = "Log in";

        // Register Form Translations
        registerTitle.textContent = "Registration";
        usernameLabel.textContent = "Username";
        registerEmailLabel.textContent = "Email";
        registerPasswordLabel.textContent = "Password";

        registerButton.textContent = "Sign Up";

    } else if (lang === 'ar') {
        textureArabic.classList.remove("hidden");
        textureEnglish.classList.add("hidden");
        textureFrench.classList.add("hidden");
        textureAmazigh.classList.add("hidden");
        textureJapanese.classList.add("hidden");

        homeLink.textContent = "الصفحة الرئيسية";
        homeLink.classList.add("ara1");
        languageLink.textContent = "اللغة";
        languageLink.classList.add("ara1");
        loginLink.textContent = " التسجيل";
        loginLink.classList.add("ara1");

        logoe.textContent = " يُوسُفُ ";
        logoe.classList.add("ara");


                // Login Form Translations
        loginTitle.textContent = "تسجيل الدخول";
        loginTitle.classList.add("ara1");
        emailLabel.textContent = "البريد الإلكتروني";
        passwordLabel.textContent = "كلمة المرور";

        forgotPassword.textContent = "نسيت كلمة المرور؟";
        loginButton.textContent = "تسجيل الدخول";

        // Register Form Translations
        registerTitle.textContent = "إنشاء حساب";
        registerTitle.classList.add("ara1");
        usernameLabel.textContent = "اسم المستخدم";
        registerEmailLabel.textContent = "البريد الإلكتروني";
        registerPasswordLabel.textContent = "كلمة المرور";

        registerButton.textContent = "إنشاء حساب";

   




    } else if (lang === 'fr') {
        textureFrench.classList.remove("hidden");
        textureEnglish.classList.add("hidden");
        textureArabic.classList.add("hidden");
        textureAmazigh.classList.add("hidden");
        textureJapanese.classList.add("hidden");

        homeLink.textContent = "Accueil";
        languageLink.textContent = "Langue";
        loginLink.textContent = "Connexion";

        logoe.textContent = "B. Youssef";
        logoe.classList.add("eng");

                // Login Form Translations
        loginTitle.textContent = "Connexion";
        emailLabel.textContent = "E-mail";
        passwordLabel.textContent = "Mot de passe";

        forgotPassword.textContent = "Mot de passe oublié ?";
        loginButton.textContent = "Se connecter";

        // Register Form Translations
        registerTitle.textContent = "Inscription";
        usernameLabel.textContent = "Nom d'utilisateur";
        registerEmailLabel.textContent = "E-mail";
        registerPasswordLabel.textContent = "Mot de passe";

        registerButton.textContent = "S'inscrire";

    } else if (lang === 'am') {
        textureAmazigh.classList.remove("hidden");
        textureEnglish.classList.add("hidden");
        textureArabic.classList.add("hidden");
        textureFrench.classList.add("hidden");
        textureJapanese.classList.add("hidden");

        homeLink.textContent = "ⵄⵡⴰⵙⵙⵉ";
        languageLink.textContent = "ⴷⵉⵇⵇⵉⵍⵉⵏ";
        loginLink.textContent = "ⴰⵢⴰⵍⵍⵉⵏ";

        logoe.textContent = "B. Youssef";
        logoe.classList.add("eng");

                // Login Form Translations
        loginTitle.textContent = "ⴰⵢⴰⵍⵍⵉⵏ";
        emailLabel.textContent = "ⴰⵎⴰⵢⵍ";
        passwordLabel.textContent = "ⵉⵎⵣⴰⴳ";

        forgotPassword.textContent = "ⵓⵎⵣⴰⵖ ⵏ ⴰⵎⵣⴳⴰ ⴷ ⵓⴷⵔⵉⵏ";
        loginButton.textContent = "ⴰⵔⵔⴰⵍ";

        // Register Form Translations
        registerTitle.textContent = "ⵉⵍⵍⵉⵍⴻⵏ";
        usernameLabel.textContent = "ⴰⵙⴰⵖⵏⴰⵙ ⴷ ⵜⴰⵏⵓⵡⴰⴳⴰⵍⵉⵜ";
        registerEmailLabel.textContent = "ⴰⵎⴰⵢⵍ";
        registerPasswordLabel.textContent = "ⵉⵎⵣⴰⴳ";

        registerButton.textContent = "ⵙⵏⵏⴽⵉⴳⵏ";


    } else if (lang === 'jp') {
        textureJapanese.classList.remove("hidden");
        textureEnglish.classList.add("hidden");
        textureArabic.classList.add("hidden");
        textureFrench.classList.add("hidden");
        textureAmazigh.classList.add("hidden");

        homeLink.textContent = "ホーム";
        languageLink.textContent = "言語";
        loginLink.textContent = "ログイン";

        logoe.textContent = "ユセフ";
        logoe.classList.add("jpns");

                // Login Form Translations
        loginTitle.textContent = "ログイン";
        emailLabel.textContent = "メール";
        passwordLabel.textContent = "パスワード";

        forgotPassword.textContent = "パスワードを忘れましたか？";
        loginButton.textContent = "ログイン";

        // Register Form Translations
        registerTitle.textContent = "新規登録";
        usernameLabel.textContent = "ユーザー名";
        registerEmailLabel.textContent = "メール";
        registerPasswordLabel.textContent = "パスワード";

        registerButton.textContent = "登録";

    }
}





// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}






