<!DOCTYPE html>
<html>
<head>
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
</head>
<body>
    <button id="button">Get Jokes</button>
    <script>
        document.querySelector("#button").addEventListener("click", () => {
            $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`, (poke1) => {
                $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`, (poke2) => {
                    $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`, (poke3) => {
                        $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`, (poke4) => {
                            $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`, (poke5) => {
                                let pokeArray = [poke1, poke2, poke3, poke4, poke5];
                                console.log(pokeArray);
                            });
                        });
                    });
                });    
            });
        });
    </script>
</body>
</html>