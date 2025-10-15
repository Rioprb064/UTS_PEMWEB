export function pengantar() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Pengantar HTML</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Apa Itu HTML?</h2>
                <p>HTML (HyperText Markup Language) adalah bahasa markup standar yang digunakan untuk membuat dan menyusun halaman web.</p>
                <ul class="list-disc list-inside space-y-1">
                    <li>HTML adalah singkatan dari <strong>Hyper Text Markup Language</strong></li>
                    <li>HTML digunakan untuk <strong>menjelaskan struktur halaman web</strong></li>
                    <li>HTML terdiri dari <strong>serangkaian elemen</strong></li>
                    <li>Elemen HTML memberi tahu browser bagaimana <strong>menampilkan konten</strong></li>
                    <li>Elemen HTML memberi label pada bagian-bagian konten seperti:
                        <ul class="list-disc list-inside ml-5">
                            <li>"Ini adalah judul"</li>
                            <li>"Ini adalah paragraf"</li>
                            <li>"Ini adalah tautan"</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="p-2">
                <h2 class="text-2xl py-5">Dokumen HTML Sederhana</h2>
                <img src="../../src/gambar/html_sederhana.png" alt="Gambar HTML" class="pb-5">
                <ul class="list-disc list-inside space-y-1">
                    <li>
                        Sintaks untuk mendeklarasikan HTML5 adalah 
                        <code class="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE html&gt;</code>.
                    </li>
                    <li>
                        Elemen adalah elemen akar dari HTML halaman
                        <code class="text-red-800 bg-blue-500 px-1">&lt;html&gt;</code>.
                    </li>
                    <li>
                        Elemen menentukan judul untuk elemen Halaman HTML (yang ditampilkan di bilah judul browser atau di tab halaman)
                        <code class="text-red-800 bg-blue-500 px-1">&lt;title&gt;</code>.
                    </li>
                    <li>
                        Elemen mendefinisikan dokumen, dan merupakan wadah untuk semua konten yang terlihat, seperti judul, paragraf, gambar, hyperlink, tabel, daftar, dll.
                        <code class="text-red-800 bg-blue-500 px-1">&lt;body&gt;</code>.
                    </li>
                    <li>
                        Elemen mendefinisikan judul besar
                        <code class="text-red-800 bg-blue-500 px-1">&lt;h1&gt;</code>.
                    </li>
                    <li>
                        Elemen mendefinisikan paragraf
                        <code class="text-red-800 bg-blue-500 px-1">&lt;p&gt;</code>.
                    </li>
                </ul>
            </div>

            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl py-5">Video: Pengenalan HTML</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto" 
                src="https://www.youtube.com/embed/it1rTvBcfRg" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section>
    `;
}

export function html_dasar() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Contoh Dasar HTML</h2>
            <p class="pt-5 px-2">
                Dalam bab ini kita akan menunjukkan beberapa contoh HTML dasar. <br>
                Jangan khawatir jika kami menggunakan tag yang belum Anda pelajari.
            </p>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">Dokumen HTML</h2>
                <p>
                    Semua dokumen HTML harus dimulai dengan deklarasi jenis dokumen:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE html&gt;</code>.
                </p>
                <p class="py-2">
                    Dokumen HTML itu sendiri dimulai dengan dan diakhiri dengan
                    <code class="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;/html&gt;</code>.
                </p>
                <p>
                    Semua dokumen HTML harus dimulai dengan deklarasi jenis dokumen:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;body&gt; &lt;/body&gt;</code>.
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/html_sederhana.png" alt="">
            </div>
            <hr class="my-10">
            
            <div class="px-2">
                <h2 class="text-2xl pb-3">Deklarasi &lt;!DOCTYPE&gt;</h2>
                <p>
                    Deklarasi mewakili jenis dokumen, dan membantu browser menampilkan halaman web dengan benar.
                    <code class="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE&gt;</code>.
                    Itu hanya boleh muncul sekali, di bagian atas halaman (sebelum tag HTML apa pun). Deklarasi tidak peka huruf besar/kecil. 
                    <code class="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE&gt;</code>.
                    Deklarasi untuk HTML5 adalah:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;!DOCTYPE&gt;</code>.
                </p>
            </div>
            <hr class="my-10">
            
            <div class="px-2">
                <h2 class="text-2xl pb-3">Judul HTML</h2>
                <p>
                    Judul HTML didefinisikan dengan tag
                    <code class="text-red-800 bg-blue-500 px-1">&lt;h1&gt; &lt;h6&gt;</code>. <br>
                    <code class="text-red-800 bg-blue-500 px-1">&lt;h1&gt;</code>
                    mendefinisikan judul yang paling penting. mendefinisikan yang paling tidak penting judul:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;h6&gt;</code>
                </p>
                <h2 class=" mt-5 py-2 text-xl">Contoh : </h2>
                <img src="../../src/gambar/heading.png" alt="Contoh Heading" class="py-2">
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">Paragraf HTML</h2>
                <p>
                    Paragraf HTML didefinisikan dengan tag:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;p&gt;</code>.
                </p>
                <h2 class=" mt-5 py-2 text-xl">Contoh : </h2>
                <img src="../../src/gambar/paragraph.png" alt="Contoh Heading" class="py-2">
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">Cara Melihat Sumber HTML</h2>
                <p>
                    Pernahkah Anda melihat halaman Web dan bertanya-tanya "Hei! Bagaimana mereka melakukan itu?"
                </p>
                <h2 class=" mt-5 py-2 text-xl">Lihat Kode Sumber HTML:</h2>
                <p>
                    Klik CTRL + U di halaman HTML, atau klik kanan pada halaman dan pilih "Lihat Sumber Halaman". Ini akan membuka Tab baru berisi kode sumber HTML halaman.
                </p>
                <h2 class=" mt-5 py-2 text-xl">Periksa elemen HTML:</h2>
                <p>
                    Klik kanan pada elemen (atau area kosong), dan pilih "Periksa" untuk melihat elemen apa yang terdiri dari (Anda akan melihat keduanya HTML dan CSS). Anda juga dapat mengedit HTML atau CSS dengan cepat di Panel Elemen atau Gaya yang terbuka.
                </p>
            </div>
        </section>
    `;
}

export function element_html() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Elemen HTML</h2>
            <p class="pt-5 px-2">
                Elemen HTML ditentukan oleh tag start, beberapa konten, dan tag akhir.
            </p>
            <hr class="my-10">   
            <div class="px-2">
                <h2 class="text-2xl pb-3">Elemen HTML</h2>
                <p>
                    Elemen HTML adalah segalanya mulai dari tag awal hingga tag akhir:
                    <code class="text-red-800 bg-blue-500 px-1"> &lt;nama tag&gt;</code> 
                    Konten masuk ke sini
                    <code class="text-red-800 bg-blue-500 px-1">&lt;/nama tag&gt;</code>.
                </p>
                <p class="py-2">
                    Contoh beberapa elemen HTML: <br>
                    <code class="text-red-800 bg-blue-500 pr-1 ml-10"> &lt;h1&gt;</code>Judul Pertama Saya<code class="text-red-800 bg-blue-500 px-1">&lt;/h1&gt;</code> <br>
                    <code class="text-red-800 bg-blue-500 pr-1 ml-10"> &lt;p&gt;</code>Paragraf pertama saya<code class="text-red-800 bg-blue-500 px-1">&lt;/p&gt;</code>
                </p>
            </div>                             
            <hr class="my-10">   
            <div class="px-2">
                <h2 class="text-2xl pb-3">Elemen HTML Bersarang</h2>
                <p>
                    Elemen HTML dapat bersarang (ini berarti elemen dapat berisi elemen lain). Semua dokumen HTML terdiri dari elemen HTML bersarang. Contoh berikut berisi empat elemen HTML
                    <code class="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;body&gt; &lt;h1&gt; &lt;p&gt;</code>
                </p>
                <h2 class="py-5 text-xl">Contoh : </h2>
                <img src="../../src/gambar/html_sederhana.png" alt="">
                <h2 class="py-5 text-xl">Contoh Penjelasan : </h2>
                <p>
                    Elemen adalah elemen akar dan itu mendefinisikan seluruh dokumen HTML.
                    <code class="text-red-800 bg-blue-500 px-1">&lt;html&gt;</code>
                </p>
                <p>
                    Ini memiliki tag awal dan tag akhir
                    <code class="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;/html&gt;</code>.
                </p>
                <p>
                    Kemudian, di dalam elemen ada sebuah elemen:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;html&gt; &lt;body&gt;</code>
                </p>
                <p>
                    Elemen mendefinisikan badan dokumen
                    <code class="text-red-800 bg-blue-500 px-1">&lt;body&gt;</code>.
                    Ini memiliki tag awal dan tag akhir
                    <code class="text-red-800 bg-blue-500 px-1">&lt;body&gt; &lt;/body&gt;</code>.
                </p>
                <p>
                    Elemen mendefinisikan judul
                    <code class="text-red-800 bg-blue-500 px-1">&lt;h1&gt;</code>.
                    Ini memiliki tag awal dan tag akhir:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;h1&gt; &lt;/h1&gt;</code>.
                </p>
                <p>
                    Elemen mendefinisikan paragraf
                    <code class="text-red-800 bg-blue-500 px-1">&lt;p&gt;</code>.
                    Ini memiliki tag awal dan tag akhir:
                    <code class="text-red-800 bg-blue-500 px-1">&lt;p&gt; &lt;/p&gt;</code>.
                </p>
            </div>                             
            <hr class="my-10">   
            <div class="px-2">
                <h2 class="text-2xl pb-3">Referensi Tag HTML</h2>
                <p>
                    Berikut referensi tag berisi informasi tambahan tentang tag ini dan atributnya. Klik link 
                    <a href="" class="underline text-blue-900 hover:text-slate-600">Referensi Tag HTML</a>
                </p>
            </div>                             
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Elemen HTML</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg pt-5 mx-auto" 
                src="https://www.youtube.com/embed/vIoO52MdZFE"
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>                           
        </section>
    `;
}
