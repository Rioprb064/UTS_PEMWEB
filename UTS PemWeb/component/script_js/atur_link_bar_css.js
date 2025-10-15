import { pengenalan, syntax_css, selector_css } from "./side_bar_css.js";

document.addEventListener('DOMContentLoaded', () => {
    atur_link();
});

function atur_link() {
    const id = ['pengenalan_css', 'sintax_css', 'selector_css'];
    const parent = document.getElementById('isi_content');

    id.forEach(item_id => {
        const el = document.getElementById(item_id);
        if (el && parent) {
            el.addEventListener('click', () => {
                parent.innerHTML = '';
                if (item_id === 'pengenalan_css')
                    parent.innerHTML = pengenalan();
                else if (item_id === 'sintax_css')
                    parent.innerHTML = syntax_css();
                else if (item_id === 'selector_css')
                    parent.innerHTML = selector_css();
            });
        }
    });
}