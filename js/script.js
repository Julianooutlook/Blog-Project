
// Navegação
function botaoInteligenciaArt() {

    let articlesProgramacao = document.querySelectorAll('.container-cards');
    articlesProgramacao.forEach(function (article) {
        article.style.display = 'none';
    });

    let articleShow = document.getElementById('inteligencia-artificial-cards');
    if (articleShow) {
        articleShow.style.display = 'flex';
    }
};

function botaoProgramacao() {

    let articlesProgramacao = document.querySelectorAll('.container-cards');
    articlesProgramacao.forEach(function (article) {
        article.style.display = 'none';
    });

    let articleShow = document.getElementById('programacao-cards');
    if (articleShow) {
        articleShow.style.display = 'flex';
    }
};

function botaoCiberseguranca() {

    let articlesProgramacao = document.querySelectorAll('.container-cards');
    articlesProgramacao.forEach(function (article) {
        article.style.display = 'none';
    });

    let articleShow = document.getElementById('ciberseguranca-cards');
    if (articleShow) {
        articleShow.style.display = 'flex';
    }
};

function botaoCuriosidades() {

    let articlesProgramacao = document.querySelectorAll('.container-cards');
    articlesProgramacao.forEach(function (article) {
        article.style.display = 'none';
    });

    let articleShow = document.getElementById('curiosidades-cards');
    if (articleShow) {
        articleShow.style.display = 'flex';
    }
};


// Função para mostrar apenas o artigo especificado na url 
function showArticleFromURL() {
    // Obtém o parâmetro 'post' da URL 
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');
    // Oculta todos os artigos 
    const articles = document.querySelectorAll('.container-article-posts');
    articles.forEach(function (article) {
        article.style.display = 'none';
    });
    // Mostra o artigo correspondente ao ID passado via parâmentro 
    const articleToShow = document.getElementById(postId);
    if (articleToShow) {
        articleToShow.style.display = 'block';
    }
};
// Chama a função 
window.onload = showArticleFromURL;
document.addEventListener('touchstart', showArticleFromURL);
document.addEventListener('click', showArticleFromURL);

// Atualizar Contador 
function getAcessos(articleId) {
    return parseInt(localStorage.getItem('acessos_' + articleId) || 0);
}

function incrementarContador(articleId) {
    const acessos = getAcessos(articleId) + 1;
    localStorage.setItem('acessos_' + articleId, acessos);
    atualizarContador(articleId);
}

function atualizarContador(articleId) {
    const contadorElement = document.getElementById('contador-' + articleId);
    contadorElement.textContent = getAcessos(articleId);
}

// Contador IA
document.addEventListener('DOMContentLoaded', function () {
    let el = document.querySelector("link-iArtificial");
    el && el.addEventListener('click', swapper, false);

    document.getElementById("link-iArtificial").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('iArtificial');
        }
    });
    atualizarContador('iArtificial');

    document.getElementById("link-redesNeurais").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('redesNeurais');
        }
    });
    atualizarContador('redesNeurais');


    document.getElementById("link-iaERobos").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('iaERobos');
        }
    });
    atualizarContador('iaERobos');
});
// Contador artigos Programação 
document.addEventListener('DOMContentLoaded', function () {
    let el = document.querySelector("link-programacao");
    el && el.addEventListener('click', swapper, false);

    document.getElementById("link-programacao").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('programacao');
        }
    });
    atualizarContador('programacao');

    document.getElementById("link-poo").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('poo');
        }
    });
    atualizarContador('poo');

    document.getElementById("link-futuro").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('futuro');
        }
    });
    atualizarContador('futuro');
});
// Contador Cibersegurança 
document.addEventListener('DOMContentLoaded', function () {
    let el = document.querySelector("link-ciberseguranca");
    el && el.addEventListener('click', swapper, false);

    document.getElementById("link-ciberseguranca").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('ciberseguranca');
        }
    });
    atualizarContador('ciberseguranca');

    document.getElementById("link-segurancaCelular").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('segurancaCelular');
        }
    });
    atualizarContador('segurancaCelular');

    document.getElementById("link-navSegura").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('navSegura');
        }
    });
    atualizarContador('navSegura');
});
// Contador curiosidades 
document.addEventListener('DOMContentLoaded', function () {
    let el = document.querySelector("link-animaisEtecnologia");

    el && el.addEventListener('click', swapper, false);

    document.getElementById("link-animaisEtecnologia").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('animaisEtecnologia');
        }
    });
    atualizarContador('animaisEtecnologia');

    document.getElementById("link-gerTempo").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('gerTempo');
        }
    });
    atualizarContador('gerTempo');

    document.getElementById("link-appRota").addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
            event.preventDefault();
            let link = this.querySelector('a').getAttribute('href');

            window.open(link, '_self');
            incrementarContador('appRota');
        }
    });
    atualizarContador('appRota');

});

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("scrollUpLink").addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});

// Ordernar por data decrescente
function ordenarTodosPorData() {

    let containers = document.querySelectorAll('.container-cards');

    containers.forEach(function (container) {
        let cards = container.querySelectorAll('.ordenarPorData');

        cards = Array.from(cards);

        cards.sort(function (a, b) {
            let dateA = new Date(a.querySelector('.data').getAttribute("data-date"));
            let dateB = new Date(b.querySelector('.data').getAttribute("data-date"));
            return dateB - dateA;
        });

        container.innerHTML = "";
        cards.forEach(function (card) {
            container.appendChild(card);
        });
    });
}




