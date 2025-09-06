<script>
import { enhance } from "$app/forms";
import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime";
</script>

<form method="post" action="?/set-language" use:enhance>
    <select name="language" on:change={e => e.target?.form?.submit()}>
        {#each availableLanguageTags as lang (lang)}
            <option value={lang} selected={languageTag() == lang} >{lang}</option>
        {/each}
    </select>

    <noscript>
        <button type="submit">Change Language</button>
    </noscript>
</form>
