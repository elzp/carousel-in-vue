import { createApp } from 'vue';
import CarouselPart from './CarouselPart.js';
const app = createApp({
  // el: '#app',
  data() {
    return {
      number: 2,
    };
  },
  components: { CarouselPart },
  methods: {
    change(type) {
      switch (type) {
        case 'left':
          break;
        case 'right':
          break;
        default:
          break;
      }
    },
  },
  template: `
  <div class="flex items-center justify-center">
		<div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">

			<div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style="min-height: 19rem;">
				<CarouselPart :number="number"/>
				<button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline"
				@click="()=>change('left')">
					<span class="block" style="transform: scale(-1);">&#x279c;</span>
				</button>
				<button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline"
				@click="()=>change('right')">
					<span class="block" style="transform: scale(1);">&#x279c;</span>
				</button>
			</div>
			<div class="flex items-center pt-5 justify-between">
				<button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style="max-height: 60px;"></button>
				<button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style="max-height: 60px;"></button>
				<button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style="max-height: 60px;"></button>
				<button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style="max-height: 60px;"></button>
				<button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style="max-height: 60px;"></button>
			</div>
    </div>
	</div>`,
});

app.mount('#app');
