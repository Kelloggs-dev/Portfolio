function adjustPDFViewerHeight() {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const pdfViewer = document.querySelector('.pdf-viewer');
    const windowHeight = window.innerHeight;
    pdfViewer.style.height = `calc(100vh - ${footerHeight}px)`;
}

function loadPDF(lang) {
    let pdfUrl;

    pdfContainer.innerHTML = '';

    if (lang === 'en') {
        pdfUrl = '/pdf/cv-anglais.pdf';
    } else {
        pdfUrl = '/pdf/Remi geslin.pdf';
    }

    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

            pdf.getPage(pageNum).then(function (page) {
 
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                const viewport = page.getViewport({ scale: 1 });
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise.then(function () {
                    document.getElementById('pdfContainer').appendChild(canvas);
                });
            });
        }
    });

    downloadButton.href = pdfUrl;
}

function initializePage() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'fr'; 
    loadPDF(lang);

    adjustPDFViewerHeight();
}

window.onload = initializePage;

window.addEventListener('resize', adjustPDFViewerHeight);
