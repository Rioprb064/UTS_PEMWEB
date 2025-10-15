export function pengenalan() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Pengenalan CSS</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Apa itu CSS?</h2>
                <p>CSS adalah bahasa yang kita gunakan untuk menata halaman Web.</p>
                <ul class="list-disc list-inside space-y-1">
                    <li>CSS adalah singkatan dari <strong>Cascading Style Sheets</strong></li>
                    <li>CSS menjelaskan bagaimana elemen HTML akan ditampilkan di layar, kertas, atau di media lain</li>
                    <li>CSS menghemat banyak pekerjaan. Itu dapat mengontrol tata letak Beberapa halaman web sekaligus</li>
                    <li>Stylesheet eksternal disimpan dalam file CSS</li>
                </ul>
            </div>
            <hr class="my-10">
            
            <div class="px-2">
            <h2 class="text-2xl pb-3">Mengapa Menggunakan CSS?</h2>
                <p>
                    CSS digunakan untuk menentukan gaya untuk halaman web Anda, termasuk desain, tata letak dan variasi tampilan untuk perangkat dan ukuran layar yang berbeda.
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/css_sederhana.png" alt="Gambar HTML" class="pb-5">
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Pengenalan CSS</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/AGDDdsiZ0Ko" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section> 
    `
}

export function syntax_css() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Sintaks CSS</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Sintaks CSS</h2>
                <p>Aturan CSS terdiri dari pemilih dan blok deklarasi:</p>
                <img src="../../src/gambar/tag.png" alt="Gambar HTML" class="py-5">
                <p>Pemilih menunjuk ke elemen HTML yang ingin Anda gayakan.</p>
                <p>Blok deklarasi berisi satu atau beberapa deklarasi yang dipisahkan oleh titik koma.</p>
                <p>Setiap deklarasi menyertakan nama properti CSS dan nilai, dipisahkan oleh titik dua.</p>
                <p>Beberapa deklarasi CSS dipisahkan dengan titik koma, dan deklarasi Blok dikelilingi oleh kurung kurawal keriting.</p>
                
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/css_paragraph.png" alt="Gambar HTML" class="pb-5">
                <p class="pt-2">
                    <span class="text-red-800 bg-blue-500">p</span> 
                    adalah selector dalam CSS (menunjuk ke elemen HTML yang ingin Anda gayakan)
                </p>
                <p>
                    <span class="text-red-800 bg-blue-500">color</span> 
                    adalah properti, dan 
                    <span class="text-red-800 bg-blue-500">red</span> 
                    merupakan nilai dari properti
                </p>
                <p>
                    <span class="text-red-800 bg-blue-500">text-align</span> 
                    adalah properti, dan 
                    <span class="text-red-800 bg-blue-500">center</span> 
                    merupakan nilai dari properti
                </p>
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Sintaks CSS</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/G8r00ZNopTE" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section> 
    `
}

export function selector_css() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">CSS Selector</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">CSS Selector</h2>
                <p>Selector CSS digunakan untuk "menemukan" (atau memilih) elemen HTML yang Anda ingin gaya.</p>
                <p class="pb-3">Kita dapat membagi pemilih CSS menjadi lima kategori:</p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Simple selectors </strong>
                    (pilih elemen berdasarkan nama, id, kelas)
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Combinator selectors </strong>
                    (pilih elemen berdasarkan hubungan tertentu di antara mereka)
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Pseudo-class selectors </strong>
                    (pilih elemen berdasarkan status tertentu)
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Pseudo-elements selectors </strong>
                    (pilih dan gaya bagian dari elemen)
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Attribute selectors </strong>
                    (pilih elemen berdasarkan nilai atribut atau atribut)
                </p>
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">CSS id Selector</h2>
                <p>
                    Selector menggunakan atribut id (
                    <span class="text-red-800 bg-blue-500 underline">id</span> 
                    ) dari elemen HTML untuk memilih elemen tertentu. id elemen unik dalam halaman, jadi selector id adalah biasa pilih satu elemen unik! Untuk memilih elemen dengan id tertentu, tulis karakter hash (#), diikuti dengan id elemen.
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/id_css.png" alt="Gambar HTML" class="pb-5">                    
            </div>  
            
            <hr class="my-10">
            
            <div class="px-2">
                <h2 class="text-2xl pb-3">CSS class Selector</h2>
                <p>
                    Pemilih memilih elemen HTML dengan atribut kelas (
                        <span class="text-red-800 bg-blue-500 underline">class</span> 
                        ) tertentu. Untuk memilih elemen dengan kelas tertentu, tulis karakter titik (.), diikuti dengan atribut nama kelas.
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/class_css.png" alt="Gambar HTML" class="pb-5">                    
                </div>  
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">CSS Universal Selector</h2>
                <p>
                    Memilih semua HTML elemen di halaman
                    <span class="text-red-800 bg-blue-500 underline">universal selector (*)</span> 
                    Aturan CSS di bawah ini akan memengaruhi setiap elemen HTML di halaman
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/universal_css.png" alt="Gambar HTML" class="pb-5">
            </div>  
            
            <hr class="my-10">
            
            <div class="px-2">
                <h2 class="text-2xl pb-3">CSS Grouping Selector</h2>
                <p>
                    Memilih semua elemen HTML dengan gaya yang sama Definisi
                    <span class="text-red-800 bg-blue-500 underline">grouping selector</span> 
                    . Lihat kode CSS berikut (elemen h1, h2, dan p memiliki definisi gaya)
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/group_css.png" alt="Gambar HTML" class="pb-5">
            </div>  
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Selector Sederhana CSS</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/ZNskBxLVOfs" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section> 
    `
}