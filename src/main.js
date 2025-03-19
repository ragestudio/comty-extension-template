import Extension from "@ragestudio/vessel/src/extension"

export default class MyExtension extends Extension {
	static namespace = "my-extension"

	public = {
		greet: (name) => this.console.log(`Hi ${name} from Extension`),
	}

	async onInitialize() {
		this.console.log("Extension initialized")
	}
}
