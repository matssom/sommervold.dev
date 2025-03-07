<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import NavButton from '../button/index.svelte';
	import { cleanPath } from '$lib/helpers/paths';
	import { browser } from '$app/environment';
    import { type Component, untrack } from 'svelte';

	type Button = {
		href: string;
		icon?: Component;
		iconOnly?: boolean;
		text?: string;
	};

	type Props = {
		buttons: Button[];
		compact?: boolean;
	}

	let { buttons, compact = false }: Props = $props();

	interface Refs {
		[key: string]: HTMLLIElement;
	}

	// References to all navigation elements
	let refs: Refs = $state({});
	let targetRef: HTMLLIElement | undefined = $state();
    let highlightRef: HTMLDivElement | undefined = $state();
    let initialized = $state(false);

    $effect(() => {
        if (initialized) return;
        if (highlightRef) {
            initialized = true;
            const path = cleanPath(page.url.pathname);
            const target = refs[path];
            untrack(() => updateHighlight(target));
        }
    })

	const updateHighlight = (target?: HTMLLIElement) => {
        if (target) targetRef = target;
		if (!highlightRef || !targetRef) return;

		highlightRef.style.width = `${targetRef.offsetWidth}px`;
		highlightRef.style.height = `${targetRef.offsetHeight}px`;
		highlightRef.style.marginLeft = `${targetRef.offsetLeft}px`;
		highlightRef.style.marginTop = `${targetRef.offsetTop}px`;
	};

	const handleMouseEnter = (href: string) => {
		// move in direction a bit
	};

	const handleMouseDown = (href: string) => {
		const newTarget = refs[cleanPath(href)];
		updateHighlight(newTarget);
	};

	const handleResize = () => {
		updateHighlight();
	};
</script>

<svelte:window on:resize={handleResize} />

<nav
    class="p-2 rounded-full bg-primary-900/70 backdrop-blur-2xl data-[scroll=0]:bg-transparent"
    data-compact={compact}
>
    <div class="relative">
        <div
            aria-hidden="true"
            data-initialized={initialized}
            class="absolute bg-primary-700 data-[initialized=true]:transition-all top-0 left-0 rounded-full"
            bind:this={highlightRef}
        ></div>
        <ul class="dnm-nav-menu">
            {#each buttons as { text, icon: Icon, href } (href)}
                <li bind:this={refs[cleanPath(href)]}>
                    <NavButton
                        onmousedown={() => handleMouseDown(href)}
                        iconOnly={!text}
                        showSelected={!initialized}
                        {href}>
                        {#if Icon}
                            <Icon />
                        {/if}
                        {text ? text : ''}
                    </NavButton>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="postcss">
    .dnm-nav-menu {
        position: relative;
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: flex-end;
        gap: 2rem;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>