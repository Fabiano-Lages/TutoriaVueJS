app.component("review-form", {
    template:
        /* html */
        `
            <form class='review-form' @submit.prevent='OnSubmit'>
                <h3>Deixe um comentário</h3>
                <label for='nome'>Nome:</label>
                <input id='nome' v-model='nome' />

                <label for='comentario'>Comentário:</label>
                <textarea id='comentario' v-model='comentario'></textarea>

                <label for='avaliacao'>Avaliação</label>
                <select id='avaliacao' v-model.number='avaliacao'>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>

                <button type='submit' class='button'>Enviar</button>

            </form>
        `,
        data() {
            return({
                nome: '',
                comentario: '',
                avaliacao: null
            })
        },
        methods: {
            OnSubmit() {
                if(!this.nome || !this.comentario || !this.avaliacao) {
                    alert("A avaliação está incompleta, preencha todos os campos");
                } else {
                    let productReview = {
                        nome: this.nome,
                        comentario: this.comentario,
                        avaliacao: this.avaliacao
                    };
                    this.$emit("review-submitted", productReview);

                    this.nome = "";
                    this.comentario = "";
                    this.avaliacao = null;
                }
            }
        }
});