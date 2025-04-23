<script>
	import * as m from '$lib/paraglide/messages';
	import GitHub from '$lib/icons/github.svelte';
	import LinkedIn from '$lib/icons/linkedin.svelte';
</script>
<div class="rounded-tl-4xl rounded-tr-4xl bg-primary-900/70">
		<div class="wrapper content-wide">
			<div class="section grid grid-cols-1 md:grid-cols-[2fr_minmax(max-content,_250px)_minmax(max-content,_250px)] gap-5">
				<div class="leading-loose row-start-2 col-start-1">
					<p class="font-sans text-lg">&copy; {new Date().getFullYear()} Mats Sommervold</p>
					<p class="font-sans text-lg text-primary-200">Powered by <a class="underline" href="/#oreo-and-safari">Oreo & Safari</a></p>
				</div>

				<h3 class="font-bold font-sans text-lg text-primary-200 row-start-1 col-start-2">Linker</h3>
				<ul class="flex flex-col gap-3 row-start-2 col-start-2">
					<li>
						<a href="/" class="font-sans hover:underline hover:text-accent">
							{m.page_about()}
						</a>
					</li>
					<li>
						<a href="/work" class="font-sans hover:underline hover:text-accent">
							{m.page_work()}
						</a>
					</li>
					<li>
						<a href="/play" class="font-sans hover:underline hover:text-accent">
							{m.page_fun()}
						</a>
					</li>
					<li>
						<a href="/contact" class="font-sans hover:underline hover:text-accent">
							{m.page_contact()}
						</a>
					</li>
				</ul>

				<h3 class="row-start-1 col-start-3 font-bold font-sans text-lg text-primary-200">Finn meg her</h3>
				<ul class="flex flex-col gap-3 row-start-2 col-start-3">
					<li>
						<a class="flex gap-2 items-center font-sans hover:underline hover:text-accent" target="_blank" rel="noopener norefferer" href="https://github.com/matssom">
							<GitHub /><span>GitHub</span>
						</a>
					</li>
					<li>
						<a class="flex gap-2 items-center font-sans hover:underline hover:text-accent" target="_blank" rel="noopener norefferer" href="https://www.linkedin.com/in/mats-sommervold/">
							<LinkedIn /><span>LinkedIn</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
