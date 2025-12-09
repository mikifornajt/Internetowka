let teraz = new Date()

// teraz.setFullYear(2023)
// teraz.setMonth(11)
// teraz.setDate(31)

let nr_miesiaca = teraz.getMonth()
    let dzien = teraz.getDate()
    let rok = teraz.getFullYear()
    let nr_dnia_tyg = teraz.getDay()

    let miesiace = ["styczeń","luty","marzec","kwiecień","maj","czerwiec",
                "lipiec","sierpień","wrzesień","październik","listopad","grudzień"]

    let dni_tyg = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]

                document.getElementById("miesiac_rok").innerHTML = miesiace[nr_miesiaca] + " " + rok
                    document.getElementById("dzien").innerHTML = dzien
                        document.getElementById("dzien_tygodnia").innerHTML = dni_tyg[nr_dnia_tyg]

            if (nr_dnia_tyg == 0) {
                document.getElementById("dzien").style.color = "#ff0000"
                document.getElementById("dzien").style.textShadow = "6px 6px 12px black"
            } else {
                document.getElementById("dzien").style.color = "white"
            }

                if (nr_miesiaca == 11 || nr_miesiaca == 0 || nr_miesiaca == 1) 
                    {
                    document.body.className = "zima"
                    } else if (nr_miesiaca >= 2 && nr_miesiaca <= 4) 
                        {
                    document.body.className = "wiosna"
                     } else if (nr_miesiaca >= 5 && nr_miesiaca <= 7) 
                        {
                        document.body.className = "lato"
                    } else
                         {
                        document.body.className = "jesien"
                        }

        let sylwester = new Date(rok, 11, 31)
        let ile_dni = Math.ceil((sylwester - teraz) / (1000*60*60*24))

        if (ile_dni < 0) 
            {
            sylwester = new Date(rok + 1, 11, 31)
            ile_dni = Math.ceil((sylwester - teraz) / (1000*60*60*24))
        }

        if (ile_dni == 0) 
            {
            document.getElementById("odliczanie").innerHTML = "Sylwester! Miłej zabawy!"
            document.body.className = "sylwester"
        } else if (ile_dni == 1) {
            document.getElementById("odliczanie").innerHTML = "Do Sylwestra został 1 dzień"
        } else 
            {
            document.getElementById("odliczanie").innerHTML = "Do Sylwestra zostało " + ile_dni + " dni"
        }