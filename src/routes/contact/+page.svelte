<script>
    import Link from '$lib/components/atoms/link/link.svelte';
    import MapPin from '$lib/icons/map-pin.svelte';
    import Email from '$lib/icons/email.svelte';
		import LinkedIn from '$lib/icons/linkedin.svelte';
		import GitHub from '$lib/icons/github.svelte';
</script>

<div class="hidden md:block text-center text-primary-200 pb-[5rem]">
    <h1 class="heading">
        <span>Kontakt Meg</span>
    </h1>
</div>

<div class="wrapper content-wide grid grid-cols-1 md:grid-cols-[23rem_1fr] gap-15 md:gap-7 lg:gap-20 xl:gap-30 items-start">
    <div class="flex flex-col gap-2 col-start-1 max-w-md justify-self-center">
        <enhanced:img class="drop-shadow-xl" src="./campfire.webp" alt="Bål ved Lutvann" />
        <div class="self-end">
            <Link external href="https://maps.app.goo.gl/dzwoP8ggS6WsFDrb8">
                <MapPin />
                <p>Lutvann, Oslo - 2024</p>
            </Link>
        </div>
    </div>
    <div class="flex flex-col gap-7 row-start-1 md:col-start-2">
        <h2 class="heading leading-tight text-3xl md:text-5xl">Jeg er alltid åpen for nye muligheter</h2>
        <p class="font-sans leading-relaxed text-lg lg:text-xl">
            Ta kontakt dersom du ønsker å lage noe sammen, ...eller har lyst til å tilbringe en
            sommer i den Canadiske villmark! Jeg er åpen for begge!
        </p>
        <ul>
            <ul class="flex flex-col gap-3 row-start-2 col-start-3">
                <li>
                    <a class="flex gap-2 items-center text-accent-100 font-sans hover:underline hover:text-accent" target="_blank" rel="noopener norefferer" href="mailto:mats@sommervold.net">
                        <Email /><span>mats@sommervold.net</span>
                    </a>
                </li>
                <li>
                    <a class="flex gap-2 items-center text-accent-100 font-sans hover:underline hover:text-accent" target="_blank" rel="noopener norefferer" href="https://www.linkedin.com/in/mats-sommervold/">
                        <GitHub /><span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a class="flex gap-2 items-center text-accent-100 font-sans hover:underline hover:text-accent" target="_blank" rel="noopener norefferer" href="https://www.linkedin.com/in/mats-sommervold/">
                        <LinkedIn /><span>LinkedIn</span>
                    </a>
                </li>
            </ul>
        </ul>
    </div>
</div>