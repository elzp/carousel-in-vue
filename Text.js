export default {
  name: 'Text',
  data() {
    const texts = [
      `
  
    As <span class="text-gray-900">Slack</span> grows rapidly,
    using Stripe helps them scale payments easily—supporting
    everything from getting paid by users around the world to
    enabling ACH payments for corporate customers.
  
  `,
      `
    With over 700,000 drivers providing nearly one million rides
    per day, <span class="text-gray-900">Lyft </span> uses Stripe
    to power payments at scale.
    <span class="text-gray-900">Lyft </span> also partnered with
    Stripe to build Express Pay, a first-of-its-kind feature that
    allows drivers to cash out whenever they want, instantly.
   `,
      `
  With Stripe’s reliable and developer-friendly tools,
  <span class="text-gray-900">Glossier</span>’s engineering team
  is freed up to focus on product and customer experiences
`,
      `
  <span class="text-gray-900">charity: water</span> optimised
  its mobile and web donation flows with Stripe so it can focus
  on what really matters: bringing clean water to every person
  on the planet. Using Stripe, it also built a new monthly
  giving programme, which makes it even easier for subscribers
  to donate throughout the year.
`,
    ];
    return { 
      rawHtml: texts[this.number] };
  },
  props: ["number"],
  template: `
<div
  data-id="text"
  class="w-full md:w-3/5 h-full items-center bg-gray-100 rounded-lg"
  >
              <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                <p class="text-gray-600" v-html="rawHtml">
                  
                </p>
                <a
                  class="
                    flex
                    items-baseline
                    mt-3
                    text-indigo-600
                    hover:text-indigo-900
                    focus:text-indigo-900
                  "
                  href=""
                >
                
                  <span>Learn more about our users</span>
                  <span class="text-xs ml-1">&#x279c;</span>
                </a>
              </div>
              
</div>`,
};
