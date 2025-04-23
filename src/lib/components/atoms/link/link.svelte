<script lang="ts">
    export let external: boolean = false,
        href: string = '#';
</script>

<a
        {href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noreferrer noopener': ''}
        class="text-accent-100 hover:text-accent hover:underline transition-colors inline-flex gap-1 items-center font-medium"
>
    <slot />
</a>