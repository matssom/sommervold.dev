<script lang="ts">
	import type { Snippet } from 'svelte';

    type Props = {
        children?: Snippet;
        compact?: boolean;
    }

    const { compact, children }: Props = $props();
</script>

<nav
    class="p-1 md:p-1.5 rounded-full bg-primary-900/70 backdrop-blur-lg data-[scroll=0]:bg-transparent flex items-center justify-between gap-4 overflow-hidden max-w-full"
    data-compact={compact}
>
    {@render children?.()}
</nav>
