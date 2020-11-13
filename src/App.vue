<template>
	<v-app>
		<v-main>
		<v-container>
			<v-container>
				<v-container>

						<!--
							<v-textarea
								solo
								name="input-7-1"
								label="Default style"
								value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
								hint="Enter adds new line, not sends"
								v-model="message"
							></v-textarea>
						-->

					<v-text-field
						label="Type your message"
						v-model="message"
					>
					</v-text-field>


				</v-container>

				<v-container>
					<v-btn @click='send("chat", $event)'>
						Send to Chatik
					</v-btn>
				</v-container>
				<v-container>
					<v-btn @click='send("channel", $event)'>
						Send to Notifications Channel
					</v-btn>
				</v-container>
				<v-container>
					<v-btn @click='send("vomidug",$event) '>
						Send to vomidug
					</v-btn>
				</v-container>
			</v-container>
		</v-container>
		</v-main>
	</v-app>
</template>

<script>
import axios from 'axios' 

export default {
	name: "App",

	data: () => ({
		message:"",
	}),

	methods: {
		async send(dest){

			console.log(dest)

			var msg = this.message;
			var res = {}
			if(msg){
				if(dest == 'vomidug' || dest == 'chat'){
					res = await axios.post('http://hm.vomidug.xyz/hm/bot/api/'+dest, {msg})
					if (res.status === 200){
						this.$toast("Отправлено!")
					} else {
						this.$toast("Не удалось отправить, возможно, апишка недоступна(")
					}
				} else if (dest == 'channel'){
					res = await axios.post('http://hm.vomidug.xyz/hm/bot/api/'+dest, {msg})
					if (res.status === 200){
						this.$toast("Отправлено!")
					} else {
						this.$toast("Не удалось отправить, возможно, апишка недоступна(")
					}

				}
				console.log(msg)
			} else(
				this.$toast('Не надо отправлять пустое сообщение, пожалуйста')
			)

			axios.get()

		}
	}

};
</script>
