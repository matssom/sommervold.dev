<script lang="ts">
    import MapPin from '$lib/icons/map-pin.svelte';
    import ArrowRight from '$lib/icons/arrow-right.svelte';
    import PawPrint from '$lib/icons/paw-print.svelte';
    import Link from '$lib/components/atoms/link/link.svelte';
    import {localizeHref} from '$lib/paraglide/runtime';
    import {m} from '$lib/paraglide/messages';
</script>

<div class="text-center text-primary-200 flex flex-col gap-10 pb-[5rem]">
    <h1 class="heading flex flex-col gap-3">
        <span>{m.about_title_1()}</span>
        <span class="block">{m.about_title_2()}</span>
    </h1>
    <p class="font-sans leading-relaxed text-lg sm:text-xl md:text-2xl text-primary-100" >
        <span>{m.about_subtitle_1()}</span>
        <span>{m.about_subtitle_2()}</span>
    </p>
</div>

<div class="wrapper max-w-screen-xl flex flex-col gap-2">
    <enhanced:img class="drop-shadow-xl" src="./borgefjell.webp" alt="Mats på tur i Børgefjell" />
    <div class="self-end">
        <Link external href="https://maps.app.goo.gl/uZpxYzGC52S6VvxZA">
            <MapPin />
            <p>Orrekskardet, Børgefjell - 2024</p>
        </Link>
    </div>
</div>

<div class="wrapper content-narrow items-start mt-15">
    <div class="flex flex-col gap-7">
        <h2 class="heading leading-tight text-5xl">{m.about_me_title()}</h2>
        <p class="font-sans leading-relaxed text-lg lg:text-xl">
            {m.about_me_p1_prefix()}
            <Link external href="https://no.wikipedia.org/wiki/lysaker">Lysaker</Link>
            {m.about_me_p1_mid()}
            <Link href="#oreo-and-safari">Oreo & Safari</Link>
            {m.about_me_p1_suffix()}
        </p>

        <p class="font-sans leading-relaxed text-lg lg:text-xl">
            {m.about_me_p2()}
        </p>

        <p class="font-sans leading-relaxed text-lg lg:text-xl">
            {m.about_me_p3()}
        </p>
    </div>
</div>

<div class="wrapper content-narrow flex flex-col sm:flex-row gap-5 md:gap-10 pt-20 md:pt-25" id="oreo-and-safari">
    <div class="flex flex-col gap-2">
        <enhanced:img class="drop-shadow-xl" src="./oreo.webp" alt="Mats på tur i Børgefjell" />
        <div class="self-end flex items-center gap-1 text-accent-100">
            <PawPrint />
            <p>Oreo, 2024</p>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <enhanced:img class="drop-shadow-xl" src="./safari.webp" alt="Mats på tur i Børgefjell" />
        <div class="self-end flex gap-1 items-center text-accent-100">
            <PawPrint />
            <p>Safari, 2024</p>
        </div>
    </div>
</div>

<div class="wrapper content-narrow mt-15 md:mt-35">
    <div class="section pt-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-stretch">
        <a href={localizeHref('/work')} class="transition-all hover:scale-102 group h-full col-span-2">
            <div class="motion-safe:transition-all rounded-2xl bg-primary-700/70 group-hover:bg-primary-700 flex flex-col gap-4 p-8 h-full justify-between">
                <div class="flex flex-col gap-4">
                    <h2 class="heading text-white leading-tight text-4xl">{m.about_work_title()}</h2>
                    <p>
                        {m.about_work_p()}
                    </p>
                </div>
                <div class="transition-all self-end flex items-center gap-1 text-accent-100 group-hover:underline group-hover:text-accent">
                    <span>{m.about_work_cta()}</span>
                    <ArrowRight />
                </div>
            </div>
        </a>
        <!--
        <a href="/play" class="transition-all hover:scale-102 group h-full">
            <div class="motion-safe:transition-all rounded-2xl bg-primary-700/70 group-hover:bg-primary-700 flex flex-col gap-4 p-8 justify-between h-full">
                <div class="flex flex-col gap-4">
                    <h2 class="heading text-white leading-tight text-4xl">Lek & Moro</h2>
                    <p>
                        Når jeg har litt ekstra tid er jeg enten i skogen, på kjøkkenet eller så koder jeg på noe.
                        Her er en liten samling av ting jeg puslet med i det siste.
                    </p>
                </div>
                <div class="transition-all self-end flex items-center gap-1 text-accent-100 group-hover:underline group-hover:text-accent">
                    <span>Les Mer</span>
                    <ArrowRight />
                </div>
            </div>
        </a>
        -->
    </div>
</div>