import { pengantar, html_dasar, element_html } from "./side_bar_html.js";

document.addEventListener('DOMContentLoaded', () => {
    atur_link();
});

function atur_link() {
    const id = ['pengantar_html', 'dasar_html', 'elemen_html'];
    const parent = document.getElementById('isi_content');
    
    id.forEach(item_id => {
        const el = document.getElementById(item_id);
        if (el && parent) {
            el.addEventListener('click', () => {
                parent.innerHTML = '';
                if (item_id === 'pengantar_html')
                    parent.innerHTML = pengantar();
                else if (item_id === 'dasar_html')
                    parent.innerHTML = html_dasar();
                else if (item_id === 'elemen_html')
                    parent.innerHTML = element_html();
            });
        }
    });
}
