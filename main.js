import './styles/styles.css';
import './scripts/ripple.js';
import { saveContent, loadContent } from './scripts/storage.js';
import { generatePDF } from './scripts/pdf.js';
import { header } from './components/header.js';
import { experience } from './components/experience.js';
import { education } from './components/education.js';
import { interests } from './components/interests.js';
import { tools } from './components/tools.js';
import { contact } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `
        <div class="resume-container" id="resume">
            ${header}
            <div class="main-content">
                <div class="left-column">
                    ${experience}
                    ${education}
                </div>
                <div class="right-column">
                    ${tools}
                    ${interests}
                    ${contact}
                </div>
            </div>
            <button id="download" class="wave-effect">Download as PDF</button>
        </div>
    `;

  loadContent();

  // Save content to localStorage on input
  document.querySelectorAll('[contenteditable]').forEach(element => {
    element.addEventListener('input', () => {
      saveContent(element);
    });
  });

  document.getElementById('download').addEventListener('click', generatePDF);
});
