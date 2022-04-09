/*
console.log("La estamos pasando genial 🚀")
const centerText= document.querySelectorAll(".center_text");

centerText.forEach(item => {
    console.log(item.innerText);
    console.log("textContent --> ",item.textContent);//como texto
    console.log("innerHTML --> ",item.innerHTML);// como html "programable" me hackean :v
    //item.innerText = "hola"//cambiamos los items (hack xd)
    //item.textContent = "<h6>Hola</h6>"
});

console.log(centerText)
*/
fetch("./../json/preguntas.json")
.then(response => response.json())
.then(data => {
    //console.log(data)
    const centerText = document.querySelectorAll(".center_text");

    centerText.forEach(center => {
        center.addEventListener("click", event => {
            //for(let i=0;i<data.length;i++){
            //    if(i== event.currentTarget.textContent-1){
            //      console.log(data[i]);
            //
            //  }
            //}
            let indexPregunta = data[event.currentTarget.innerText-1]

            console.log(indexPregunta)

            let modal =document.querySelector("#myModal");

            console.log(modal);

            modal.style.display = "block";

            let modalBodyP = document.querySelector(".modal-body p");

            modalBodyP.textContent = indexPregunta;

            let close = document.querySelector("#close");
            close.onclick = function(){
                modal.style.display = "none";
            }
        })
        
    });
})