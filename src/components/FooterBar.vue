<template>
    <div class="footer">
        <div class="footer-block first-block">
            <div class="B2-semibold">Opening hours</div>
            <div class="footer-section">
                <div class="footer-title">Restaurant</div>
                <h3 class="footer-time">Mo - Su 11:30 - 22:30</h3>
            </div>
            <div class="footer-section">
                <div class="footer-title">SPA - Servis</div>
                <h3 class="footer-time">Mo - Su 10:00 - 22:00</h3>
            </div>
            <div class="footer-title">Address</div>
            <h3 class="footer-address">
                Staroměstské náměstí 480/24<br>
                Praha 1, 110 00
            </h3>
        </div>

        <div class="footer-block second-block">
            <div class="B2-semibold">Links</div>
            <ul class="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/menugastro">Menu</a></li>
                <li><a href="/spagastro">SPA - Servis</a></li>
                <li><a href="/exploregastro">About us</a></li>
                <!-- <li><a href="/loginadmin" @click.prevent="goToLogin">Login for Admin</a></li> -->
            </ul>
        </div>

        <div class="footer-block third-block">
            <div class="B2-semibold">Additional Information</div>
            <div class="footer-info">
                The restaurant is air conditioned.<br>
                WiFi is available.<br><br>
                We can hold your reservation for 15 minutes.<br>
                Pets are not allowed in the restaurant. <br><br>
                Our restaurant offers a variety of vegetarian and vegan options. <br>
                We accept all major credit cards for payment.<br><br>
                The restaurant has a dedicated kids' menu.<br><br>
                Outdoor seating is available during the summer months.<br><br>
                Our team can accommodate food allergies or dietary restrictions upon request.<br>
            </div>
        </div>

        <div class="footer-block forth-block">
            <div class="B2-semibold">Contacts</div>
            <div class="footer-contact">
                Phone<br>
                <a href="tel:+420723338287">+420&nbsp;723&nbsp;338&nbsp;287</a><br><br>
                Email<br>
                <a href="mailto:info@gastrowerrestaurant.cz">info@gastrowerrestaurant.cz</a><br><br>
                P.R. manager<br>
                <a href="mailto:trykur.artem@fieldrestaurant.cz">Trykur Artem</a><br><br>
                Restaurant manager<br>
                <a href="mailto:miroslav.nosek@gastrowerrestaurant.cz">Miroslav Nosek</a><br><br>
                <a href="presskit">Info for media and travel agencies</a><br><br>
                Provozovatel<br>
                Červená Liška Restaurant s.r.o.<br>
                Staroměstské náměstí 480/24<br>
                Praha 1, 110 00<br>
            </div>
        </div>
    </div>

    <hr class="footer-line" />

    <div class="footer-bottom-l">
        <div class="footer-bottom-text">
            <span>© GastroWer restaurant</span>
            <a href="/" class="footer-link">Terms and conditions</a>
            <a href="/" class="footer-link">Personal data protection</a>
        </div>
        <div class="back-top">
            <a href="#top" class="footer-link">Back to the top</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBar',
}

</script>

<style>
/* загальний футер */
.footer {
    --main-black: #101010;
    --main-white-100: #FFFFFF;
    --others-grey: #ECECEC;
    --contrast-gold: #A99B70;
    --contrast-green: #58FFA5;

    background-color: var(--main-white-100);
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    color: var(--main-black);
    z-index: 1;
}

/* Налаштування кожного блоку */
.footer-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Футер Блок 1 */
.footer-section {
    margin-bottom: 24px;
}

.footer-title {
    font-weight: bold;
    margin-bottom: 8px;
}

/* блок 1 */
.footer-time {
    margin-bottom: 16px;
}

.footer-address {
    margin-bottom: 24px;
}

/* Футер-Блок 2 */
.footer-links {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    text-decoration: none;
    color: var(--main-black);
    font-size: 16px;
}

.footer-links a:hover {
    color: var(--contrast-gold);
}

/* Футер Блок 3 */
.footer-info {
    font-size: 14px;
}

/* Футер Блок 4 */
.footer-contact a {
    color: var(--main-black);
    text-decoration: none;
}

.footer-contact a:hover {
    color: var(--contrast-green);
}

.footer-contact {
    font-size: 14px;
}

/* Нижня частина футера */
.footer-bottom-l {
    box-sizing: border-box;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    background-color: white;
    color: var(--main-black);
    padding-top: 40px;
    padding-bottom: 36px;
    gap: 28px;
    overflow-x: hidden;
}

.footer-bottom-text {
    display: flex;
    flex-direction: row;
    gap: 36px;
    white-space: nowrap;
}

.back-top {
    justify-self: right;
}

.footer-line {
    height: 1px;
    background-color: var(--main-black);
    margin: 0 40px;
}
</style>
