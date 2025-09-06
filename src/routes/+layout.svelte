<script lang="ts">
	import NavMenu from '$lib/components/organisms/navigation/menu/index.svelte';
	import NavBar from '$lib/components/organisms/navigation/bar/index.svelte';
	import Logo from '$lib/icons/logo.svelte';
	import Footer from '$lib/components/templates/footer/footer.svelte';
	import '../app.css';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const changeLanguage = () => {
	}

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
</svelte:head>

	<div class="wrapper items-center grid-cols-[1fr_max-content_1fr] fixed top-0 left-0 right-0 grid z-10 lg:gap-4 p-4 lg:py-4">
		<div></div>
		<div>
			<NavBar>
				<NavMenu links={[
						{ href: '/', text: "About" },
						{ href: '/work', text: "Work" },
						//{ href: '/play', text: m.page_fun() },
						{ href: '/contact', text: "Contact" },
			]} />
			</NavBar>
		</div>
		<div class="hidden md:flex justify-end">
			<NavBar>
				<NavMenu selectedId={'en'} buttons={[
					{ onclick: () => changeLanguage('en'), text: 'EN', iconOnly: true, id: 'en' },
					{ onclick: () => changeLanguage('nb-no'), text: 'NO', iconOnly: true, id: 'nb-no' },
				]} />
			</NavBar>
		</div>
	</div>
	<div class="pt-[6rem] md:pt-[9rem] pb-10 md:pb-30">
		{@render children()}
	</div>

	<Footer />