<script lang="ts">
	import Chart from '$lib/components/organisms/chart/chart.svelte';
	import Timeline from '$lib/components/organisms/chart/timeline.svelte';
    import { Step } from '$lib/components/organisms/chart/timeline';
    import TimeXAxis from '$lib/components/organisms/chart/time-x-axis.svelte';
    import Link from '$lib/components/atoms/link/link.svelte';
    import ArrowRight from '$lib/icons/arrow-right.svelte';
</script>

<div class="hidden md:block text-center text-primary-200 pb-[5rem]">
    <h1 class="heading">
        <span>Programvareutvikler</span>
    </h1>
</div>

<div class="wrapper content-wide grid grid-cols-1 md:grid-cols-[23rem_1fr] gap-15 md:gap-7 lg:gap-20 xl:gap-30 items-start">
    <div class="overflow-hidden rounded-[999px_999px_20px_20px] bg-secondary-400 text-primary-900">
        <img src="/headshot.jpg" alt="Mats Sommervold in a bussiness suit">
        <div class="px-6 py-8 flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h3 class="font-sans text-secondary-800">Stack på jobben</h3>
                <div class="flex flex-col gap-8 justify-center">
                    <div class="current-stack text-sm md:text-base flex flex-wrap gap-1 md:gap-1.5">
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Ignition SCADA</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Spring</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Java</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Docker</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">MQTT</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Next.js</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">SQL Server</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">TwinCAT 3.1</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="font-sans text-secondary-800">Stack hjemme</h3>
                <div class="flex flex-col gap-8 justify-center">
                    <div class="current-stack text-sm md:text-base flex flex-wrap gap-1 md:gap-1.5">
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">.Net Core</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">SvelteKit</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Rabbit MQ</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">PostgreSQL</p>
                        <p class="rounded-full bg-secondary-700 text-secondary-50 px-3">Docker</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-7">
        <h2 class="heading leading-tight text-3xl md:text-5xl">Jeg er en software-utvikler basert i Oslo</h2>
        <p class="font-sans leading-relaxed text-lg lg:text-xl">
            Min utviklingsreise begynte med en barndomsfascinasjon for Lego. Jeg begynte med å bygge og programmere Lego-roboter og gikk over til webutvikling i tenårene da jeg fant ut at jeg kunne tjene noen kroner på det.
        </p>
        <p class="font-sans leading-relaxed text-xl lg:text-xl">
            Jeg jobber for tiden som software utvikler hos <Link href="https://nordicbooster.com">Nordic Booster</Link>
            hvor jeg har lært å kombinere min teknologi-bakgrunn med de skarpe elektroingeniørene våre for å tilby
            pioneerende energitjenester med industrielle batterier og ladestasjoner.
            Hos Nordic Booster gjør vi alt fra produktutvikling, produksjon, software og service selv, lokalt i
            <Link external href="https://no.wikipedia.org/wiki/R%C3%A6lingen">Rælingen</Link>.
        </p>
        <p class="font-sans leading-relaxed text-xl lg:text-xl">
            Gjennom årene som konsulent og har jeg hatt muligheten til å jobbe med et bredt spekter av teknologier og verktøy og dyrket en dyp forståelse av programvareutviklingsprosessen uavhengig av teknologistabelen. Jeg verdsetter enkelhet, brukeropplevelse og målrettet testing med verdiskapning som hovedmålet.
        </p>
    </div>
</div>
<div class="max-w-[90rem] m-auto section">
    <div class="section pt-10 pb-8">
        <Chart>
            <Timeline step={Step.Month} minSteps={9} roundMode="closest" timelineData={[
                {
                    title: "Nordic Booster",
                    description: "Senior Developer",
                    start: new Date("2024-02-01").getTime(),
                    length: (new Date().getTime() - new Date().getTime()),
                },
                {
                    title: "twoday IT Minds",
                    description: "Software Developer",
                    start: new Date("2021-09-01").getTime(),
                    length: (new Date("2024-01-31").getTime() - new Date("2021-09-01").getTime()),
                },
                {
                    title: "Oslo Metropolitan University",
                    description: "Data Engineer Student & Teacher's Assistant",
                    start: new Date("2019-08-01").getTime(),
                    length: (new Date("2022-05-01").getTime() - new Date("2019-08-01").getTime()),
                },
                {
				    title: "Coness",
				    description: "Freelance Frontend Developer",
				    start: new Date("2017-04-01").getTime(),
				    length: (new Date("2019-07-31").getTime() - new Date("2017-04-01").getTime()),
                }
            ]}>
                {#snippet data(record)}
                    <div class="relative h-20">
                        <div class="absolute right-0 min-w-[220px] w-full bg-secondary-400 rounded-full px-8 py-2 text-black overflow-hidden">
                            <h2 class="font-sans text-neutral-800 text-xl truncate">{record.title}</h2>
                            <p class="font-sans text-neutral-600 truncate">{record.description}</p>
                        </div>
                    </div>
                {/snippet}
            </Timeline>
            <div slot="x-axis" let:minX let:maxX>
                {#if minX && maxX}
                    <TimeXAxis start={new Date(minX)} end={new Date(maxX)} />
                {/if}
            </div>
        </Chart>
    </div>
</div>
<div class="wrapper content-narrow">
    <div class="section pt-0 flex flex-col gap-9">
        <h2 class="heading leading-tight text-3xl md:text-5xl">Ta gjerne kontakt hvis du ønsker å lage noe sammen!</h2>
        <p class="font-sans leading-relaxed text-xl">
            Jeg er alltid åpen for å utvide horisonten min. Jeg trives med å prøve, feile og lære, gjerne med litt risiko. Drivkraften min er eierskapet til produktet, og teamet jeg jobber med. Send meg en melding hvis du vil diskutere litt over en tekopp! (da jeg ikke drikker kaffe)
        </p>
        <div class="flex justify-end">
            <a href="/contact" class="flex items-center gap-1 text-secondary-900 bg-secondary-300 py-2 px-4 rounded-full group justify-between shadow-lg hover:scale-105 transition-transform active:scale-100">
                <span>Ta Kontakt</span>
                <span class="group-hover:translate-x-1 transition-transform">
                <ArrowRight />
            </span>
            </a>
        </div>
    </div>
</div>

<style>
    .current-stack {
        --icon-size: 3rem;
        color: var(--color-secondary-800);
    }
</style>
