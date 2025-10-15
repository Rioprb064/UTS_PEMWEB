import { pengenalan, syntax_js, variable_js } from "./side_bar_js.js";

document.addEventListener('DOMContentLoaded', () => {
    atur_link();
});

function atur_link() {
    const id = ['pengenalan_js', 'sintax_js', 'variable_js'];
    const parent = document.getElementById('isi_content');

    id.forEach(item_id => {
        const el = document.getElementById(item_id);
        if (el && parent) {
            el.addEventListener('click', () => {
                parent.innerHTML = '';
                if (item_id === 'pengenalan_js')
                    parent.innerHTML = pengenalan();
                else if (item_id === 'sintax_js')
                    parent.innerHTML = syntax_js();
                else if (item_id === 'variable_js')
                    parent.innerHTML = variable_js();
            });
        }
    });
}