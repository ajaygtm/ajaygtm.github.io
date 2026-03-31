---
layout: ~/layouts/MarkdownLayout.astro
title: Contact
---

<script type="module">
// Forwards `subject` and `body` search params to the email link.

const originalSearchParams = new URLSearchParams(location.search);
const element = document.querySelector('#contact-email');

const emailUrl = new URL(element.href);
if (originalSearchParams.has('subject')) {
	emailUrl.searchParams.set('subject', originalSearchParams.get('subject'));
}
if (originalSearchParams.has('body')) {
	emailUrl.searchParams.set('body', originalSearchParams.get('body'));
}

element.href = emailUrl.toString();

// Clear URL parameters.
const currentUrl = new URL(window.location);
currentUrl.searchParams.delete('subject');
currentUrl.searchParams.delete('body');
window.history.replaceState({}, '', currentUrl);
</script>

# Contact

<div class="sm:-mt-2 not-prose font-bold bg-clip-text text-transparent bg-linear-to-r from-primary-500 to-secondary-500 hover:underline hover:underline-offset-8 hover:decoration-4 decoration-black dark:decoration-white">
	<a id="contact-email" href="mailto:ajaygautam3001@gmail.com" class="text-[clamp(0.5rem,6vw,1.875rem)]">ajaygautam3001@gmail.com</a>
</div>

I value clear messages, so keep it concise and include enough context for me to help.

I prefer email over calls.

If you're reaching out about projects, collaboration, or ML work, include the goal, constraints, and timeline.
