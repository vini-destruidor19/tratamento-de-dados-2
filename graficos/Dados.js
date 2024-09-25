const url ='https://raw.githubusercontent.com/vini-destruidor19/API-ex-vini/refs/heads/main/entrevista.json'

async function visualizarInfos() {
    const res = await fetch(url)
    const dados = await res.json()

    const CelularesMaisVendidos = dados[0].modelo
    const NumerosDeVendas = dados[0].votos
    const Percentual = dados[0].percentual

    console.log(dados[0].modelo) 
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("caixa-grafico__texto")
    paragrafo.innerHTML = `Em busca de descobrir os celulares mais comprados, foi feito uma pesquisa usando inteligencia artificial, foi possivel concluir que o celuar Apple iPhone 14 ficou em primeiro lucar, o principal comnetario a respeito do celuar foi: iPhone 14 é o meu preferido com um designer impecável`
    const caixa = document.getElementById("caixa-grafico")
    caixa.appendChild(paragrafo)
}
visualizarInfos()