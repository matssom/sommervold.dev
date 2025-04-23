<script lang="ts">
	import { page } from '$app/state';
		import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation';
	import { pathEqual } from '$lib/helpers/paths';
		import { onMount, type Snippet } from 'svelte';

	type Props = {
		children: Snippet,
		iconOnly?: boolean,
		href?: string | undefined,
		disabled?: boolean,
        showSelected?: boolean,
		onmouseenter?: (event: MouseEvent) => void,
        onmousedown?: (event: MouseEvent) => void,
		onclick?: (event: Event) => void
	}

	let {
		children,
		iconOnly = false,
		href = undefined,
		disabled = false,
        showSelected = true,
		onmouseenter = () => {
		},
        onmousedown = () => {
        },
		onclick = () => {
		}
	}: Props = $props();

	const selected = $derived(showSelected && !!pathEqual(page.url.pathname, href));

	let preloaded = $state(false);
	const handleMouseEnter = (event: MouseEvent) => {
		if (!preloaded) {
			preloaded = true;
			if (href) {
				preloadCode(href);
			}
		}

		onmouseenter(event);
	};

	let root: HTMLElement | null = null
    onMount(() => {
        root=document.getElementsByTagName( 'html' )[0]
        root?.classList.add('smoothscroll')
	})

    beforeNavigate(() => {root?.classList.remove('smoothscroll')})
    afterNavigate(() => {root?.classList.add('smoothscroll')})
</script>

<!-- button will prefetch on hover -->
{#if href}
    <a
        {href}
        onmouseenter={handleMouseEnter}
        {onclick}
        {onmousedown}
        role="button"
        tabindex="0"
        class="dnm-nav-button dnm-meta font-sans text-sm lg:text-base {iconOnly ? 'iconOnly' : ''}"
        class:selected
    >
        {@render children()}
    </a>
{:else}
    <button
        {disabled}
        onmouseenter={handleMouseEnter}
        {onclick}
        tabindex="0"
        class="dnm-nav-button dnm-meta font-sans text-sm lg:text-base {iconOnly ? 'iconOnly' : ''}"
        class:selected
    >
        {@render children()}
    </button>
{/if}

<style lang="postcss">
    .dnm-nav-button,
    .dnm-nav-button:link,
    .dnm-nav-button:visited {
        font-weight: 400;
        font-family: var(--font-sans), 'sans-serif';
        text-decoration: none;
        position: relative;
        cursor: pointer;
        --icon-size: 1.4rem;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        color: var(--color-primary-100);
        border: none;
        background-color: transparent;
        padding: .5rem 1rem;
        border-radius: 50rem;
        transition: all 0.2s ease-in-out;
    }

    .dnm-nav-button.iconOnly {
        justify-content: center;
        padding: .4rem;
    }

    @media (max-width: 768px) {
        .dnm-nav-button {
            --icon-size: 1rem;
            gap: .5rem;
            padding: .3rem .5rem;
        }

        .dnm-nav-button.iconOnly {
            padding: .3rem;
        }
    }

    .dnm-nav-button:hover:not(:disabled) {
        color: var(--color, var(--color-white));
    }

    .dnm-nav-button.selected:not(:disabled) {
        background-color: var(--background-color, var(--color-primary-700));
        color: var(--color, var(--color-white));
        transform: scale(1);
    }

    .dnm-nav-button:active:not(:disabled) {
        transform: scale(0.95);
    }

    .dnm-nav-button:disabled {
        color: gray;
    }
</style>