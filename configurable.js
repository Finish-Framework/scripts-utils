import * as merge from 'deepmerge';

export default {
	data () {
		return {
			configurationDefaults: {},
		}
	},
	computed: {
		configuration() {
			return merge(this.configurationDefaults, this.config, { arrayMerge: this.combineMerge });
		},
	},
	props: {
		config: {
			type: Object,
			required: true,
		}
	},
	methods: {
		validateConfig(obj) {
			if(obj) {
				return true;
			}
			return false;
		},
		addConfigurationDefaults(configs) {
			this.configurationDefaults = merge(this.configurationDefaults, configs, { arrayMerge: this.combineMerge });
		},
		combineMerge(target, source, options) {
			return target.concat(source);
		}
	}
}