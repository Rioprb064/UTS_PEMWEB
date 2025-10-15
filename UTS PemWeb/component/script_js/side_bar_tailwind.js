export function pengenalan() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Pengenalan Tailwind CSS</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Apa itu Tailwind CSS?</h2>
                <p>Tailwind CSS adalah framework CSS utility-first yang memudahkan proses styling langsung di dalam HTML menggunakan kelas-kelas bawaan.</p>
                <p>Dengan Tailwind CSS, kamu tidak perlu menulis file CSS panjang — cukup gunakan class seperti <span class="text-red-800">p-4</span>, <span class="text-red-800">text-center</span>, atau <span class="text-red-800">bg-gray-200</span> langsung pada elemen HTML.</p>
                <p class="mt-4">Perbedaan antara CSS biasa dan Tailwind CSS:</p>
                <ul class="list-disc list-inside space-y-1">
                    <li>
                        <strong>CSS biasa</strong> menulis styling di file terpisah dan menetapkan selector.
                    </li>
                    <li>
                        <strong>Tailwind CSS</strong> menggunakan class utility langsung di elemen HTML.
                    </li>
                </ul>
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl">Kegunaan Tailwind CSS</h2>
                <h2 class="mt-5 pb-2 text-xl">Membuat Desain Responsive</h2>
                <p>
                    Tailwind mempermudah pembuatan desain responsive dengan breakpoint bawaan seperti 
                    <span class="text-red-800">sm:</span>, <span class="text-red-800">md:</span>, <span class="text-red-800">lg:</span>, dll.
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    &lt;div class="text-base md:text-xl"&gt;Teks ini berubah ukuran di layar lebih besar&lt;/div&gt;
                </div>
                <h2 class="mt-10 pb-2 text-xl">Kustomisasi Tampilan Tanpa CSS Tambahan</h2>
                <p>
                    Kamu bisa langsung menyesuaikan warna, ukuran, padding, margin, dan lainnya langsung lewat class:
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    &lt;button class="bg-blue-500 text-white px-4 py-2"&gt;Klik Saya&lt;/button&gt;
                </div>
                <h2 class="mt-10 pb-2 text-xl">Tailwind CSS Mempercepat Workflow</h2>
                <p>
                    Karena tidak perlu bolak-balik menulis class CSS sendiri, pengembangan antarmuka jadi jauh lebih cepat dan efisien.
                </p>
                <h2 class="mt-10 pb-2 text-xl">Contoh Layout Grid Tailwind</h2>
                <p>
                    Tailwind juga punya utilitas layout seperti grid dan flexbox. Berikut contoh membuat layout dengan grid:
                </p>
                <div class="text-red-800 border p-2 mt-1 bg-amber-100">
                    &lt;div class="grid grid-cols-3 gap-4"&gt;<br>
                    &nbsp;&nbsp;&lt;div class="bg-gray-200"&gt;1&lt;/div&gt;<br>
                    &nbsp;&nbsp;&lt;div class="bg-gray-300"&gt;2&lt;/div&gt;<br>
                    &nbsp;&nbsp;&lt;div class="bg-gray-400"&gt;3&lt;/div&gt;<br>
                    &lt;/div&gt;
                </div>
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Pengenalan Tailwind CSS</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg mx-auto pt-5" 
                src="https://www.youtube.com/embed/rqdR9wbW71Y" 
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </section>
    `
}

export function install_tailwind() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Instalasi Tailwind CSS v4</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Instalasi Menggunakan CLI (NPM)</h2>
                <p>Metode ini cocok untuk proyek yang ingin mengoptimalkan performa dengan build CSS secara custom.</p>
                <ol class="list-decimal list-inside space-y-4 mt-2">
                    <li>
                        <strong>Install Tailwind CSS</strong><br>
                        <p class="ml-5">
                            Jalankan perintah berikut di direktori proyek:  
                            <code class="text-red-800 px-1">npm install tailwindcss @tailwindcss/cli</code>
                        </p>
                    </li>
                    <li>
                        <strong>Impor Tailwind di CSS Anda</strong><br>
                        <p class="ml-5">
                            Tambahkan impor ke file CSS utama Anda. @import "tailwindcss"; 
                        </p>
                        <div class="border p-2 bg-gray-50 mt-1 ml-5 text-red-800">
                            @import "tailwindcss
                        </div>
                    </li>
                    <li>
                        <strong>Memulai proses pembuatan CLI Tailwind</strong><br>
                        <p class="ml-5">
                            Jalankan:  
                            <code class="text-red-800 px-1">npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch</code> Jalankan alat CLI untuk memindai file sumber Anda untuk kelas dan membangun CSS Anda.
                        </p>
                    </li>
                    <li>
                        <strong>Link file CSS ke HTML</strong><br>
                        <p class="ml-5">
                            Tambahkan file CSS yang dikompilasi ke <code>&lt;head&gt;</code> dan mulailah menggunakan kelas utilitas Tailwind untuk menata konten Anda
                        </p>
                        <div class="border p-2 bg-gray-50 mt-1 ml-5 text-red-800">
                            &lt;link href="./output.css" rel="stylesheet"&gt;
                        </div>
                    </li>
                </ol>
            </div>
            <hr class="my-10">
            <div class="p-2">
                <h2 class="text-2xl pb-5">Instalasi Menggunakan CDN</h2>
                <p>
                    Metode ini sangat cepat dan mudah, cocok untuk proyek kecil atau prototyping tanpa build tools. <br>
                    Tambahkan tag <code>&lt;link&gt;</code> berikut langsung ke <code>&lt;head&gt;</code> di file HTML kamu:
                </p>
                <div class="border p-2 bg-gray-50 mt-1 text-red-800">
                    &lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@4.2.0/dist/tailwind.min.css" rel="stylesheet"&gt;
                </div>
                <p class="mt-3">
                    Setelah itu, kamu bisa langsung memakai class Tailwind di HTML tanpa konfigurasi tambahan.
                </p>
            </div>
            <hr class="my-10">
            <div class="aspect-w-16 aspect-h-9">
                <h2 class="text-2xl">Video: Instalasi Tailwind</h2>
                <iframe class="w-[60vw] h-96 rounded-lg shadow-lg pt-5 mx-auto" 
                src="https://www.youtube.com/embed/n9widGM__Lg"
                title="Video Pengenalan HTML"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>   
        </section>
    `
}

export function atur_tailwind() {
    return `
        <section>
            <h2 class="text-center font-bold text-4xl">Pengaturan editor</h2>
            <div class="p-2">
                <h2 class="text-2xl py-5">Dukungan sintaks</h2>
                <p>
                    CSS Tailwind menggunakan sintaks CSS kustom seperti
                    <code class="text-red-800 px-1">@theme</code>, 
                    <code class="text-red-800 px-1">@variant</code>, dan 
                    <code class="text-red-800 px-1">@source</code>, 
                    di beberapa editor ini dapat memicu peringatan atau kesalahan di mana aturan ini tidak dikenali.
                </p> <br>
                <p>
                    Jika Anda menggunakan VS Code, plugin <span class="underline font-bold"> Tailwind CSS IntelliSense</span> resmi kami menyertakan mode bahasa CSS Tailwind khusus yang memiliki dukungan untuk semua aturan dan fungsi khusus yang digunakan Tailwind.
                </p> <br>
                <p>
                    Dalam beberapa kasus, Anda mungkin perlu menonaktifkan linting/validasi CSS asli jika editor Anda sangat ketat tentang sintaks yang diharapkan dalam file CSS Anda.
                </p>
            </div>
            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-5">IntelliSense untuk Kode VS</h2>
                <p>
                    Ekstensi <span class="underline font-bold"> Tailwind CSS IntelliSense</span> resmi untuk Visual Studio Code meningkatkan pengalaman pengembangan Tailwind dengan menyediakan fitur canggih kepada pengguna seperti pelengkapan otomatis, penyorotan sintaks, dan linting.
                </p> <br>
                <p class="flex flex-row text-wrap py-1">
                    <span class="font-bold">● Pelengkapan otomatis </span class="font-bold"> :
                    memberikan saran cerdas untuk kelas utilitas, serta fungsi dan arahan CSS.
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <span class="font-bold">● Linting </span class="font-bold"> :
                    menyoroti kesalahan dan potensi bug di CSS dan markup Anda.
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <span class="font-bold">● Pratinjau kursor </span class="font-bold"> :
                    mengungkapkan CSS lengkap untuk kelas utilitas saat Anda mengarahkan kursor ke atasnya.
                </p>
                <p class="flex flex-row text-wrap py-1">
                    <span class="font-bold">● Penyorotan sintaks</span class="font-bold"> :
                    sehingga fitur Tailwind yang menggunakan sintaks CSS kustom disorot dengan benar.
                </p>
            </div> 

            <hr class="my-10">
            <div class="px-2">
                <h2 class="text-2xl pb-5">Penyortiran kelas dengan Prettier</h2>
                <p>
                    Kami memelihara plugin resmi Prettier untuk Tailwind CSS yang secara otomatis mengurutkan kelas Anda mengikuti urutan kelas yang kami rekomendasikan. <br><br>
                    Ini bekerja dengan mulus dengan konfigurasi Tailwind khusus, dan karena ini hanya plugin Prettier, ini berfungsi di mana pun Prettier bekerja—termasuk setiap editor dan IDE populer, dan tentu saja di baris perintah.
                </p>
            </div> 
        </section>
    `
}