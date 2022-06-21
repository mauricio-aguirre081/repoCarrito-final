
const countdown = () => {
    const fechaCount = new Date("2022/06/20 00:00:00:").getTime();
    const fechAhora = new Date().getTime();
    const fechaFalta = fechaCount - fechAhora; 

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(fechaFalta / dia);
    const textoHora = Math.floor((fechaFalta % dia) / hora);
    const textoMinuto = Math.floor((fechaFalta % hora) / minuto);
    const textoSegundo = Math.floor((fechaFalta % minuto) / segundo); 

    document.querySelector(".dia").innertText = textoDia;
    document.querySelector(".hora").innertText = textoHora;
    document.querySelector(".minuto").innertText = textoMinuto;
    document.querySelector(".segundo").innertText = textoSegundo; 
};

countdown();



