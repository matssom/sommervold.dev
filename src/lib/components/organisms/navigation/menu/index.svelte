<script lang="ts">
	import { page } from '$app/state';
	import NavButton from '../button/index.svelte';
	import { cleanPath } from '$lib/helpers/paths';
    import { type Component, untrack } from 'svelte';

	type Link = {
		href: string;
		icon?: Component;
		iconOnly?: boolean;
		text?: string;
	}

	type Button = {
		id: string;
		onclick: () => void;
        icon?: Component;
        iconOnly: boolean;
        text?: string;
    };

	type Props = {
		selectedId: string;
		buttons: Button[];
	} | {
		links: Link[];
    }

	let props: Props = $props();

	interface Refs {
		[key: string]: HTMLLIElement;
	}

	// References to all navigation elements
	let refs: Refs = $state({});
	let targetRef: HTMLLIElement | undefined = $state();
    let highlightRef: HTMLDivElement | undefined = $state();
    let initialized = $state(false);

    $effect(() => {
        if (highlightRef) {
            initialized = true;
            const path = 'links' in props ? cleanPath(page.url.pathname) : props.selectedId;
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

	const handleLinkClick = (href: string) => {
		const newTarget = refs[cleanPath(href)];
		updateHighlight(newTarget);
	};

	const handleResize = () => {
		updateHighlight();
	};
</script>

<svelte:window on:resize={handleResize} />

<div class="relative">
    <div
        aria-hidden="true"
        data-initialized={initialized}
        class="absolute bg-primary-700 data-[initialized=true]:transition-all top-0 left-0 rounded-full"
        bind:this={highlightRef}
    ></div>
    <ul class="dnm-nav-menu md:gap-1 lg:gap-3">
        {#if 'buttons' in props}
            {#each props.buttons as { text, icon: Icon, onclick, id, iconOnly } (id)}
                <li bind:this={refs[id]}>
                    <NavButton
                        iconOnly={iconOnly}
                        showSelected={!initialized}
                        {onclick}>
                        {#if Icon}
                            <Icon />
                        {/if}
                        {text ? text : ''}
                    </NavButton>
                </li>
            {/each}
        {:else}
            {#each props.links as { text, icon: Icon, iconOnly, href } (href)}
                <li bind:this={refs[cleanPath(href)]}>
                    <NavButton
                        onclick={() => handleLinkClick(href)}
                        iconOnly={iconOnly}
                        showSelected={!initialized}
                        {href}>
                        {#if Icon}
                            <Icon />
                        {/if}
                        {text ? text : ''}
                    </NavButton>
                </li>
            {/each}
        {/if}
    </ul>
</div>

<style lang="postcss">
    .dnm-nav-menu {
        position: relative;
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: flex-end;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>