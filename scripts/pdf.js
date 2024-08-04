import html2pdf from 'html2pdf.js';

export function generatePDF() {
  const element = document.getElementById('resume');
  const opt = {
    margin: 0,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 1.0 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(element).save();
}
