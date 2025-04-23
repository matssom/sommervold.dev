<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import NavMenu from '$lib/components/organisms/navigation/menu/index.svelte';
	import NavBar from '$lib/components/organisms/navigation/bar/index.svelte';
	import Logo from '$lib/icons/logo.svelte';
	import * as m from '$lib/paraglide/messages';
	import Footer from '$lib/components/templates/footer/footer.svelte';
	import '../app.css';
	import { type AvailableLanguageTag, languageTag } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let { children } = $props();

	function changeLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localizedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localizedPath, { noScroll: true });
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
</svelte:head>

<ParaglideJS {i18n}>
	<div class="wrapper items-center grid-cols-[1fr_max-content_1fr] fixed top-0 left-0 right-0 grid z-10 lg:gap-4 p-4 lg:py-4">
		<div></div>
		<div>
			<NavBar>
				<NavMenu links={[
						{ href: '/', text: m.page_about() },
						{ href: '/work', text: m.page_work() },
						{ href: '/play', text: m.page_fun() },
						{ href: '/contact', text: m.page_contact() },
			]} />
			</NavBar>
		</div>
		<div class="hidden md:flex justify-end">
			<NavBar>
				<NavMenu selectedId={languageTag()} buttons={[
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
</ParaglideJS>