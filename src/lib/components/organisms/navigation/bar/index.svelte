<script lang="ts">
	import type { Snippet } from 'svelte';

    type Props = {
        children?: Snippet;
        compact?: boolean;
    }

    const { compact, children }: Props = $props();
</script>

<nav
    class="md:p-2 rounded-full md:bg-primary-900/70 backdrop-blur-lg data-[scroll=0]:bg-transparent flex items-center justify-between gap-4 overflow-hidden max-w-full"
    data-compact={compact}
>
    {@render children?.()}
</nav>
