export function pengenalan() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Pengenalan JavaScript</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Apa itu JavaScript?</h2>
                <p>JavaScript adalah bahasa pemrograman web. Itu dapat menghitung, memanipulasi, dan memvalidasi data. Itu dapat memperbarui dan mengubah HTML dan CSS.</p>
                <p>Perbedaan HTML, CSS, JavaScript : </p>
                <ul class="list-disc list-inside space-y-1">
                    <li>
                        <strong>HTML</strong> untuk menentukan konten halaman web
                    </li>
                    <li>
                        <strong>CSS</strong> untuk menentukan tata letak halaman web
                    </li>
                    <li>
                        <strong>JavaScript</strong> untuk memprogram perilaku halaman web
                    </li>
                </ul>
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl">Kegunaan JavaScript</h2>
                <h2 class=" mt-5 pb-2 text-xl">JavaScript Dapat Mengubah Konten HTML</h2>
                <p>
                    Salah satu dari banyak metode HTML JavaScript adalah
                    <span class="text-red-800">getElementById()</span>. <br>
                    Contoh di bawah ini "menemukan" elemen HTML (dengan id="demo"), dan mengubah konten elemen (innerHTML) menjadi "Hello JavaScript": <br>
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    document.getElementById("demo").innerHTML = "Hello JavaScript";
                </div>
                <h2 class=" mt-10 pb-2 text-xl">JavaScript Dapat Mengubah Gaya HTML (CSS)</h2>
                <p>
                    Mengubah gaya elemen HTML, adalah varian dari mengubah HTML atribut:
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    document.getElementById("demo").style.fontSize = "35px";
                </div>
                <h2 class=" mt-10 pb-2 text-xl">JavaScript Dapat Menyembunyikan Elemen HTML</h2>
                <p>
                    Menyembunyikan elemen HTML dapat dilakukan dengan mengubah gaya:
                    <span class="text-red-800">display</span>. <br>
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    document.getElementById("demo").style.display = "none";
                </div>
                <h2 class=" mt-10 pb-2 text-xl">JavaScript Dapat Menampilkan Elemen HTML</h2>
                <p>
                    Menampilkan elemen HTML tersembunyi juga dapat dilakukan dengan mengubah gaya:
                    <span class="text-red-800">display</span>. <br>
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    document.getElementById("demo").style.display = "block";
                </div>
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Pengantar JavaScript</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/zofMnllkVfI" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section>
    `
}

export function syntax_js() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Sintaks JavaScript</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Aturan Sintaks</h2>
                <p>Sintaks adalah aturan bagaimana program harus dibangun:</p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    // Cara deklarasi variabel <br>
                    let x = 5; <br>
                    let y = 6; <br> <br>
                    // Perhitungan sederhana <br>
                    let z = x + y; <br> <br>
                    // Ini komentar <br>
                </div>
            </div>
            <hr class="my-10">
            
            <div class="px-2">
                <h2 class="text-2xl pb-3">Nilai JavaScript</h2>
                <p>Sintaks JavaScript mendefinisikan dua jenis nilai:</p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Literal </strong> (Nilai tetap)
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <strong>● Literal </strong> (Nilai tetap)
                </p>
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">Literal JavaScript</h2>
                <p>
                    Aturan sintaks yang paling penting untuk literal (nilai tetap) adalah: <br>
                    Angka ditulis dengan atau tanpa desimal:
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    10.50 <br> <br>
                    1001
                </div>
                <br>
                <p>
                    String adalah teks, ditulis dalam tanda kutip ganda atau tunggal:
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    "John Doe" <br> <br>
                    'John Doe'
                </div>
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-3">Variabel JavaScript</h2>
                <p>
                    Variabel adalah wadah untuk menyimpan nilai data. Variabel harus diidentifikasi dengan nama unik.
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    // deklarasi nilai x <br>
                    let x; <br> <br>
                    // inisialisasi nilai x <br>
                    x = 6;
                </div>
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: JavaScript Syntax</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/4BBlc_qDs8g" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section>
    `
}

export function variable_js() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Variabel JavaScript</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Variabel </h2>
                <p>Variabel JavaScript adalah wadah untuk data. Variabel JavaScript dapat dideklarasikan dengan cara:</p>
                <h2 class="pt-5">Contoh menggunakan let</h2>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    let x = 5; <br>
                    let y = 6; <br>
                    let z = x + y; <br>
                </div>
                <h2 class="pt-5">Contoh menggunakan const</h2>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    const x = 5; <br>
                    const y = 6; <br>
                    const z = x + y; <br>
                </div>
            </div>
            <hr class="my-10">
            
            <div class="px-2">
                <h2 class="text-2xl pb-3">Mendeklarasikan Variabel JavaScript</h2>
                <p>
                    Membuat variabel di JavaScript disebut mendeklarasikan variabel. Anda dapat mendeklarasikan variabel JavaScript dengan 
                    <span class="text-red-800">let</span> atau
                    <span class="text-red-800">const</span>
                </p>
                <h2 class="pt-5">Contoh menggunakan let</h2>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    let carName;
                </div>
                <p class="pt-2">Setelah deklarasi, variabel tidak memiliki nilai (
                    <span class="text-red-800">undefined</span>
                    ). Untuk menetapkan nilai ke variabel, gunakan tanda sama dengan:
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    carName = "Volvo";
                </div>
                <h2 class="pt-5">Contoh menggunakan const</h2>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    const carName = "Volvo";
                </div>
                <p class="pt-2">Selalu gunakan jika nilainya tidak boleh diubah
                    <span class="text-red-800">const</span>
                </p>
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Variabel JavaScript</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/7xStNKTM3bE" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section>
    `
}