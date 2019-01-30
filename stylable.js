import configurable from './configurable.js';
import * as merge from 'deepmerge';

export default {
	data () {
		return {
			stylesDefaults: {},
			cssClassesDefaults: {},
		}
	},
	computed: {
		styles() {
			return this.configuration.styles;
		},
		cssClasses() {
			return this.configuration.cssClasses;
		}
	},
	methods: {
		
	},
	created() {
		this.addConfigurationDefaults({
			styles: this.stylesDefaults,
			cssClasses: this.cssClassesDefaults,
		});
	},
	mixins: ['configurable']
}