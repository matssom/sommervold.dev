<script lang="ts">
    export let external: boolean = false,
        href: string = '#';
</script>

<a
        {href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noreferrer noopener': ''}
        class="visited:text-accent text-accent hover:text-accent hover:underline transition-colors"
>
    <slot />
</a>