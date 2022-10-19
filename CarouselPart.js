import Text from './Text.js';
const paths = [
  require('./logos/slack.svg'),
  require('./logos/lyft.svg'),
  require('./logos/glossier.svg'),
  require('./logos/charity.svg'),
];
export default {
  name: 'CarouselPart',
  components: { Text },
  props: ['number'],
  data() {
    return {
      mySvg: paths[this.number],
      numberOfText: this.number,
    };
  },
  // beforeUpdate () {
  //   mySvg = paths[this.number]
  // },
  created() {
    this.$watch(
      () => this.number,
      (toParams, previousParams) => {
        this.mySvg = paths[toParams];
        this.numberOfText = toParams;
        console.log('this', this.number);
      }
    );
  },
  template: `
   
   <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
				style="min-height: 19rem;">
			<div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
			<div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
          <img  :src="mySvg" alt="logo"/> 
			</div>
		</div>
  <Text :newnumber="numberOfText"/>

  `,
};
