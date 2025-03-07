<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import NavMenu from '$lib/components/organisms/navigation/menu/index.svelte';
	import Logo from '$lib/icons/logo.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Manuale:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</svelte:head>

<ParaglideJS {i18n}>
	<div class="wrapper items-center grid-cols-[1fr_max-content_1fr] fixed top-0 left-0 right-0 grid z-10">
		<div></div>
		<div class="flex justify-center">
			<NavMenu buttons={[
					{ href: '/', text: 'Hei', icon: Logo },
					{ href: '/work', text: 'Faglig' },
					{ href: '/play', text: 'Lek & Moro' },
					{ href: '/contact', text: 'Kontakt' },
			]} />
		</div>
	</div>
	<div class="wrapper">
		<div class="pt-[9rem] pb-[5rem]">
			{@render children()}
		</div>
	</div>
</ParaglideJS>