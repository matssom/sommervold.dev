<script lang="ts">
	import { type AvailableLanguageTag, setLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		setLanguageTag(newLanguage);
	}
</script>

<div>
	<button onclick={() => switchToLanguage('en')}>en</button>
	<button onclick={() => switchToLanguage('nb-no')}>nb-no</button>
</div>
