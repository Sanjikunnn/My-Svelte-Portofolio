<div class="app">
    <Header></Header>

    <main>
        {@render children()}
    </main>

    <footer>
        <p>
            Made with 💖 <a href="https://wa.me/089523013056" class="author-link" >Faizal Muhamad Iqbal</a>
        </p>
        <small style="color: #fff; display: block; text-align: center;">&copy; 2025</small>
    </footer>
</div>

<script>
import Header from "./Header.svelte";
import "../app.css";

let {
    children
} = $props();
</script>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        text-align: center;
        padding: 0px;
        background: transparent;
        color: white;
        font-size: 16px;
        margin-top: 30px;
    }

    footer p {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.6;
    }

    footer a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        margin: 8px 0;
        font-size: 16px;
    }

    footer a:hover {
        color: #00fff2;
        text-decoration: underline;
    }

    footer small {
        color: #f1f1f1;
        font-size: 14px;
        display: block;
        text-align: center;
    }

    @media (min-width: 480px) {
        footer {
            padding: 20px 40px;
        }
    }
</style>
