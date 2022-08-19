////Se utiliza poniendo el $(Selector).accion()
//$("li").hide()

//$("h1").hide()

$(document).ready(() => {

        $(".hide-btn").click(() =>{

                console.log("Ocultando...");

                $("h1").fadeOut()


        })

        $(".show-btn").click(() =>{

            console.log("Activando...");

            $("h1").fadeIn()


        })

        $("li").click(()=> {

            $("h1").css({ color: "red"})
        })
        
        $("li").dblclick(()=> {

            $("h1").css({ color: "yellow"})
        })

        $(".add-btn").click(()=> {

            $("ul").append("<li> Add Element </li>")  //Para poner el nuevo elemento al final
            //$("ul").prepend("<li> Add Element </li>") // Para poner el nuevo elemento al comienzo

        })

        $("li").mouseenter((elem) =>{

            elem.target.style.color = "blue"

        })

        $("li").mouseleave((elem) =>{

            elem.target.style.color = "black"

        })


})