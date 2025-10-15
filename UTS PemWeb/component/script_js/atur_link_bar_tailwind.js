import { pengenalan, install_tailwind, atur_tailwind } from "./side_bar_tailwind.js";

document.addEventListener('DOMContentLoaded', () => {
    atur_link();
});

function atur_link() {
    const id = ['pengenalan_tailwind', 'install_tailwind', 'atur_tailwind'];
    const parent = document.getElementById('isi_content');

    id.forEach(item_id => {
        const el = document.getElementById(item_id);
        if (el && parent) {
            el.addEventListener('click', () => {
                parent.innerHTML = '';
                if (item_id === 'pengenalan_tailwind')
                    parent.innerHTML = pengenalan();
                else if (item_id === 'install_tailwind')
                    parent.innerHTML = install_tailwind();
                else if (item_id === 'atur_tailwind')
                    parent.innerHTML = atur_tailwind();
            });
        }
    });
}