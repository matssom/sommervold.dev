<script lang="ts">
	import MapPin from '$lib/icons/map-pin.svelte';

		function markLoaded(el: HTMLDivElement) {
		const img: HTMLImageElement | null = el.querySelector('img');
		if (!img) return;
		if (img.complete) {
			el.classList.add('loaded');
			return;
		}
		const onLoad = () => {
			el.classList.add('loaded');
			img.removeEventListener('load', onLoad);
		};
		img.addEventListener('load', onLoad);
	}
	import Chart from '$lib/components/organisms/chart/chart.svelte';
	import Timeline from '$lib/components/organisms/chart/timeline.svelte';
    import { Step } from '$lib/components/organisms/chart/timeline';
    import TimeXAxis from '$lib/components/organisms/chart/time-x-axis.svelte';
    import Link from '$lib/components/atoms/link/link.svelte';
    import ArrowRight from '$lib/icons/arrow-right.svelte';
    import {localizeHref} from '$lib/paraglide/runtime';
    import { m } from '$lib/paraglide/messages';
</script>

<div class="hidden md:block text-center text-primary-200 pb-[5rem]">
    <h1 class="heading">
        <span>{m.work_title_h1()}</span>
    </h1>
</div>

<div class="wrapper content-wide grid grid-cols-1 md:grid-cols-[23rem_1fr] gap-15 md:gap-7 lg:gap-20 xl:gap-30 items-start">
    <div class="overflow-hidden rounded-[999px_999px_20px_20px] bg-secondary-400 text-primary-900">
        <div class="blur-up" style="--bg:url('/headshot-preview.webp')" use:markLoaded>
            <enhanced:img src="./headshot.webp" alt={m.work_headshot_alt()} />
        </div>
        <div class="px-6 py-8 flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h3 class="font-sans text-secondary-800">{m.work_sidebar_job_stack_title()}</h3>
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
                <h3 class="font-sans text-secondary-800">{m.work_sidebar_home_stack_title()}</h3>
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
        <h2 class="heading leading-tight text-3xl md:text-5xl">{m.work_intro_h2()}</h2>
        <p class="font-sans leading-relaxed text-lg lg:text-xl">
            {m.work_intro_p1()}
        </p>
        <p class="font-sans leading-relaxed text-xl lg:text-xl">
            {m.work_intro_p2_prefix()} <Link href="https://nordicbooster.com">Nordic Booster</Link>
            {m.work_intro_p2_mid()}
            {m.work_intro_p2_suffix_prefix()}
            <Link external href="https://no.wikipedia.org/wiki/R%C3%A6lingen">Rælingen</Link>.
        </p>
        <p class="font-sans leading-relaxed text-xl lg:text-xl">
            {m.work_intro_p3()}
        </p>
    </div>
</div>
<div class="max-w-[90rem] m-auto section">
    <div class="section pt-10 pb-8">
        <Chart>
            <Timeline step={Step.Month} minSteps={9} roundMode="closest" timelineData={[
                {
                    title: "Nordic Booster",
                    description: m.timeline_role_senior_dev(),
                    start: new Date("2024-02-01").getTime(),
                    length: (new Date().getTime() - new Date().getTime()),
                },
                {
                    title: "twoday Minds",
                    description: m.timeline_role_software_dev(),
                    start: new Date("2021-09-01").getTime(),
                    length: (new Date("2024-01-31").getTime() - new Date("2021-09-01").getTime()),
                },
                {
                    title: "Oslo Metropolitan University",
                    description: m.timeline_role_student_ta(),
                    start: new Date("2019-08-01").getTime(),
                    length: (new Date("2022-05-01").getTime() - new Date("2019-08-01").getTime()),
                },
                {
				    title: "Coness",
				    description: m.timeline_role_freelance_frontend(),
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
        <h2 class="heading leading-tight text-3xl md:text-5xl">{m.work_cta_h2()}</h2>
        <p class="font-sans leading-relaxed text-xl">
            {m.work_cta_p()}
        </p>
        <div class="flex justify-end">
            <a tabindex="0" href={localizeHref('/contact')} class="flex items-center gap-1 text-secondary-900 bg-secondary-300 py-2 px-4 rounded-full group justify-between shadow-lg hover:scale-105 transition-transform active:scale-100">
                <span>{m.work_cta_button()}</span>
                <span class="group-hover:translate-x-1 transition-transform">
                <ArrowRight />
            </span>
            </a>
        </div>
    </div>
</div>

<div class="wrapper content-narrow flex flex-col gap-2">
    <div class="blur-up drop-shadow-xl" style="--bg:url('/snowscape-preview.webp')" use:markLoaded>
        <enhanced:img class="w-full h-auto" src="./snowscape.webp" alt="Frozen lake at Seiland" />
    </div>
    <div class="self-end">
        <Link external href="https://maps.app.goo.gl/XGz4XAkQYNNrF9v77">
            <MapPin />
            <p>Seiland - Juli, 2025</p>
        </Link>
    </div>
</div>

<style>
    .current-stack {
        --icon-size: 3rem;
        color: var(--color-secondary-800);
    }
</style>
