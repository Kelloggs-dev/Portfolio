function loadPDF(choix) {
    let pdfUrl;

    pdfContainer.innerHTML = '';

    if (choix === 'stage1') {
        pdfUrl = '/pdf/attestation de stage.pdf';
    } else if (choix === 'stage2') {
        pdfUrl = '/pdf/attestation de stage 2.pdf';
    } else{
        pdfUrl = '/pdf/RAPPORT DE STAGE.pdf';
    }

    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
        
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

            pdf.getPage(pageNum).then(function (page) {

                const canvas = document.createElement('canvas');

                const context = canvas.getContext('2d');

                const viewport = page.getViewport({ scale: 1 });

                canvas.width = 700;
                canvas.height = 900;
                

                page.render({

                    canvasContext: context,
                    viewport: viewport

                }).promise.then(function () {

                    const pageContainer = document.createElement('div');
                    pageContainer.classList.add('page-container');

                    pageContainer.appendChild(canvas);
                    pdfContainer.appendChild(pageContainer);
                });
            });
        }
    });

    downloadButton.href = pdfUrl;
}

function initializePage() {
    const params = new URLSearchParams(window.location.search);
    const choix = params.get('choix') || 'stage1';
    loadPDF(choix);

}

window.onload = initializePage;
