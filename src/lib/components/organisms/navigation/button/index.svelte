<script lang="ts">
	import { page } from '$app/state';
	import { preloadCode } from '$app/navigation';
	import { pathEqual } from '$lib/helpers/paths';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet,
		iconOnly?: boolean,
		href?: string | undefined,
		compact?: boolean,
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
		compact = false,
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
        data-compact={compact}
        class="dnm-nav-button dnm-meta font-sans {iconOnly ? 'iconOnly' : ''}"
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
        data-compact={compact}
        class="dnm-nav-button dnm-meta font-sans {iconOnly ? 'iconOnly' : ''}"
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
        padding: .5rem 2rem;
        border-radius: 50rem;
        transition: all 0.2s ease-in-out;
    }

    .dnm-nav-button.iconOnly {
        justify-content: center;
        padding: 1rem;
    }

    .dnm-nav-button[data-compact='true'],
    :global([data-compact='true']) .dnm-nav-button {
        --icon-size: 2rem;
        gap: 1rem;
        padding: 2rem 1rem;
    }

    .dnm-nav-button[data-compact='true'].iconOnly,
    :global([data-compact='true']) .dnm-nav-button.iconOnly {
        padding: 1rem;
    }


    .dnm-nav-button:hover:not(:disabled) {
        color: var(--color, var(--color-white));
        transform: scale(1.03);
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