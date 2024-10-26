<template>
    <div class="login-container">
        <h2>Авторизація</h2>
        <form @submit.prevent="login">
            <div>
                <label for="username">Логін</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Пароль</label>
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required />
                <button id="show-hide" type="button" @click="togglePasswordVisibility">
                    {{ showPassword ? 'Приховати' : 'Показати' }}
                </button>
            </div>
            <button id="button-login-ad" type="submit">Увійти</button>
        </form>
        <p v-if="errorMessage" class="error"> {{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    name: "LoginAdmin",
    data() {
        return {
            username: "",
            password: "",
            errorMessage: "",
            showPassword: false,
        };
    },
    methods: {
        login() {
            // Перевірка логіну і пароля
            if (this.username === "admingastro" && this.password === "GastroWer2024") {
                localStorage.setItem("isAdmin", "true");
                this.$router.push("/");
            } else {
                this.errorMessage = "Невірний логін або пароль";
            }
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>



<style>
.login-container {
    max-width: 400px;
    margin: 200px auto;
    padding: 30px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form div {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input {
    width: 95%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#button-login-ad {
    background-color: #56423e;
    width: 90px;
    height: 40px;
    padding-top: 2px;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.error {
    color: red;
}

#show-hide{
    background-color: #56423e;
    color: aliceblue;
    border: 1px;
    border-radius: 5px;
    margin-top: 10px;
}
</style>