export default {
  name: 'Text',
  data() {
    return {};
  },
  template: `
<div
  data-id="text"
  class="w-full md:w-3/5 h-full items-center bg-gray-100 rounded-lg"
  >
              <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                <p class="text-gray-600">
                  As <span class="text-gray-900">Slack</span> grows rapidly,
                  using Stripe helps them scale payments easily—supporting
                  everything from getting paid by users around the world to
                  enabling ACH payments for corporate customers.
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
