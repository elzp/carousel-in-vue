import Text from './Text.js';

export default {
  name: 'CarouselPart',
  components: { Text },
  data() {
    return {
      mySvg: require('./logos/charity.svg'),
    };
  },
  template: `
  <div> 
   <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
				style="min-height: 19rem;">

			<div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
			<div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
          <img  :src="mySvg" alt="logo"/>

			</div>
		</div>
  <Text />

  </div>`,
};
